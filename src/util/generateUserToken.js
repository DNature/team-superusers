import jwt from 'jsonwebtoken';
import { SECRET } from '../config';

// Generate User Token
export const generateUserToken = user => {
  return jwt.sign(
    {
      id: user.id,
      displayName: user.displayName,
      email: user.email,
      mobileNumber: user.mobileNumber
    },
    SECRET,
    { expiresIn: '24h' }
  );
};
