import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: String,
    username: String,
    mobileNumber: Number,
    password: String
  },

  {
    timestamps: true
  }
);

export default model("User", userSchema);
