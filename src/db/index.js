import mongoose from 'mongoose';
import { MONGODB } from '../config';

export default (async function connect() {
  try {
    await mongoose.connect(MONGODB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error(err);
  }
})();
