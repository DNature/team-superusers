//? Schema
import { User, VerifyApi } from '../../models';

//? Validators / Authentication
import { UserInputError } from 'apollo-server-express';
import {
  validateRegisterUserInput,
  validateUserLoginInput
} from '../../util/validators';

//?
import bcrypt from 'bcryptjs';
import { generateUserToken } from '../../util/generateUserToken';

export default {
  Query: {
    // Query All Users
    async getUsers(root, args, context, info) {
      try {
        const users = await User.find().sort({ createdAt: -1 });
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },

    //~ Query Single User
    async getUserById(root, { id }, context, info) {
      try {
        const user = await User.findById(id);
        if (!user) {
          return false;
        }

        return user;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    //~ Register User
    async registerUser(
      root,
      { registerUser: { displayName, email, password, key } }
    ) {
      // const admin = checkAdmin(context);
      const verify = await VerifyApi.findOne({ key });
      const { valid, errors } = validateRegisterUserInput(
        displayName,
        email,
        password,
        key
      );

      if (!valid) {
        throw new UserInputError('Errors', {
          errors
        });
      }

      if (!verify) {
        throw new UserInputError('Enter a valid Verification Code', {
          errors: {
            key: 'Enter a valid Verification Code'
          }
        });
      }

      if (key !== verify.key) {
        throw new UserInputError('Invalid Verification Code', {
          errors: {
            key: 'Invalid Verification Code'
          }
        });
      }
      // Check if an exiting user with the same email
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new UserInputError('Existing User', {
          errors: {
            email: 'User Exists'
          }
        });
      }

      try {
        // Hash password
        password = await bcrypt.hash(password, 12);

        // Presave user to Database
        const newUser = new User({
          displayName,
          email,
          mobileNumber: verify.mobileNumber,
          password,
          createdAt: new Date().toISOString()
        });

        // Save user to Database

        const user = await newUser.save();
        // Generate User Token
        const token = generateUserToken(user);
        await verify.delete();

        return {
          ...user._doc,
          id: user._id,
          token
        };
      } catch (err) {
        throw new Error(err);
      }
    },

    //~ Login User
    async loginUser(root, { email, password }) {
      const { errors, valid } = validateUserLoginInput(email, password);

      // Validate User Input
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Find User from DB
      const user = await User.findOne({ email });

      if (!user) {
        throw new UserInputError("User Doesn't Exist", {
          errors: {
            email: "User Doesn't Exist"
          }
        });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new UserInputError('Wrong Credentials', {
          errors: {
            password: 'Wrong password'
          }
        });
      }

      const token = generateUserToken(user);
      return {
        ...user._doc,
        id: user.id,
        token
      };
    }
  }
};
