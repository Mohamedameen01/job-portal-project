import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    picture: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String },
    },
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
      min: 0,
    },
    hobbies: [String],
    interests: [String],
    gender: {
      type: String,

      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    role: {
      type: String,
      enum: ["Employee", "Employer", "Admin"],
    },
    highQualification: { type: String },
    unreadMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
