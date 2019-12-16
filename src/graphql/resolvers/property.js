//? Schema
import { Property, Category } from '../../models';
import checkAuth from '../../util/checkAuth';
//? Validators / Authentication
import { UserInputError, AuthenticationError } from 'apollo-server-express';
import { validatePropertyInput } from '../../util/validators';

export default {
  Query: {
    // Query All Users
    async properties(root, args) {
      try {
        const property = await Property.find().sort({ createdAt: -1 });
        return property;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    async createProperty(
      _,
      {
        property: {
          name,
          description,
          location,
          ammount,
          imageUrl,
          category,
          otherImages,
          tags,
          hotSale
        }
      },
      context
    ) {
      const user = checkAuth(context);
      const { valid, errors } = validatePropertyInput(
        name,
        description,
        location,
        ammount,
        imageUrl,
        category,
        hotSale
      );
      if (!valid) throw new UserInputError('Errors', { errors });

      const categoryToUpdate = await Category.findOne({ name: category });
      if (!categoryToUpdate) {
        throw new UserInputError("Category doesn't");
      }

      try {
        const newProperty = new Property({
          name,
          description,
          location,
          ammount,
          imageUrl,
          category,
          hotSale,
          owner: user.displayName,
          createdAt: new Date().toISOString(),
          otherImages,
          tags
        });

        await categoryToUpdate.updateOne({ $inc: { count: 1 } });
        await categoryToUpdate.save();

        const property = await newProperty.save();

        property.id = property._id.toString();

        return property;
      } catch (err) {
        throw new Error(err);
      }
    },

    async deleteProperty(_, { id }, context) {
      const user = checkAuth(context);
      const property = await Property.findById(id);

      if (!property) {
        throw new UserInputError('Property not found');
      }
      const updateCategoryCount = await Category.findOne({
        name: property.category
      });

      try {
        // if (property.owner !== user.displayName) {
        //   throw new AuthenticationError('Unauthorized action');
        // }

        await updateCategoryCount.updateOne({ $inc: { count: -1 } });
        await updateCategoryCount.save();

        await property.delete();

        return 'Property deleted Successfully';
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
