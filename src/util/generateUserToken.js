import jwt from "jsonwebtoken";
import { SECRET } from "../config";

// Generate User Token
export const generateUserToken = user => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      fullName: user.fullName
    },
    SECRET,
    { expiresIn: "24h" }
  );
};
