//? Schema
import User from '../../models/User';

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
      {
        registerUser: { fullName, username, mobileNumber, password }
      },
      context // For Validation and aditional headers
    ) {
      // const admin = checkAdmin(context);
      const { valid, errors } = validateRegisterUserInput(
        fullName,
        username,
        mobileNumber,
        password
      );

      if (!valid) {
        throw new UserInputError('Errors', {
          errors
        });
      }

      // Check if an exiting user with the same email
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        throw new UserInputError('Existing User', {
          errors: {
            username: 'User Exists'
          }
        });
      }

      // Hash password
      password = await bcrypt.hash(password, 12);

      // Presave user to Database
      const newUser = new User({
        fullName,
        username,
        mobileNumber,
        password,
        createdAt: new Date().toISOString()
      });

      // Save user to Database
      const user = await newUser.save();
      // Generate User Token
      const token = generateUserToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },

    //~ Login User
    async loginUser(root, { username, password }, context, info) {
      const { errors, valid } = validateUserLoginInput(username, password);

      // Validate User Input
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Find User from DB
      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError("User Doesn't Exist");
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong password';
        throw new UserInputError('Wrong Credentials', { errors });
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
