import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String, // ✅ Fix: "email" is not a valid type
    required: true
  },
  phone: {
    type: Number,
    maxlength: 10
  },
  location: {
    type: String,
    required: true
  },
  problemTitle: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const UserModel = model("User", UserSchema);
export default UserModel; // ✅ ES Module export
