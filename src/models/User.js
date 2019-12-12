import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: String
});

export default model('User', userSchema);
