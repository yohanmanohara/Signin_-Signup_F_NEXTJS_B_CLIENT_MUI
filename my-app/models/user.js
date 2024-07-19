import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
 
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
