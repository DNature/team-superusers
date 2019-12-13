import { model, Schema } from 'mongoose';

const propertySchema = new Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  location: { type: String, required: true },
  ammount: { type: Number, required: true },
  hotSale: { type: String, default: 'false' },
  category: { type: String, required: true },
  createdAt: { type: String, required: true },
  otherImages: [{ url: String }],
  tags: [{ tag: String }]
});

export default model('Property', propertySchema);
