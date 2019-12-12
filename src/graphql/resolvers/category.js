//? Schema
import { Category } from '../../models';

//? Validators / Authentication
import { UserInputError } from 'apollo-server-express';
import { validateCategoryInput } from '../../util/validators';

export default {
  Query: {
    // Query All Users
    async categories(root, args) {
      try {
        const category = await Category.find().sort({ createdAt: -1 });
        return category;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    async createCategory(_, { name }, context) {
      const { valid, errors } = validateCategoryInput(name);
      if (!valid) throw new UserInputError('Errors', { errors });

      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        throw new UserInputError('Existing Category', {
          errors: {
            name: 'Existing Category'
          }
        });
      }

      try {
        const newCategory = new Category({
          name,
          createdAt: new Date().toISOString()
        });

        const category = await newCategory.save();
        category.id = category._id.toString();

        return category;
      } catch (err) {
        throw new Error(err);
      }
    },

    async deleteCategory(_, { id }) {
      const category = await Category.findById(id);
      if (!category) {
        throw new UserInputError('This category doesn"t exist');
      }

      try {
        await category.delete();
        return 'Deleted Successfully';
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
