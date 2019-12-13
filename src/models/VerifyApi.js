import { Schema, model } from 'mongoose';

const newVerifyApi = new Schema({
  key: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  expiresAt: {
    type: Date,
    default: Date.now,
    index: { expires: '1m' }
  }
});

export default model('VerifyApi', newVerifyApi);
