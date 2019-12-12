import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true, default: 0 },
  createdAt: String
});

export default model('Category', categorySchema);
