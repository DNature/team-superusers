import { AuthenticationError, UserInputError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';

export default context => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = jwt.verify(token, SECRET);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired/Unauthorized Token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]'");
  }
  throw new Error('Authorization headers must be provided');
};
