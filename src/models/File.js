import { model, Schema } from "mongoose";

const fileSchema = new Schema(
  {
    id: String,
    filename: String,
    mimetype: String,
    path: String,
    encoding: String
  },
  {
    timestamps: true
  }
);

export default model("File", fileSchema);
