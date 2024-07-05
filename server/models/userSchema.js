import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
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
    },
    hobbies: [String],
    interest: [String],
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
    },
    role: {
      type: String,
      enum: ["employee", "employer", "admin"],
    },
    currentSalary: {
      type: String,
    },
    expectedSalary: { type: String },
    preferredLocation: {
      type: [String],
    },
    languages: {
      type: [String],
    },
    about: {
      type: String,
    },
    appliedJobs: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    shortListed: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    resume: { type: String },
    skills: [String],
    totalExperience: {
      type: String,
    },
    highQualification: { type: String },
    education: [
      {
        institution: { type: String },
        degree: { type: String },
        fieldOfStudy: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        grade: { type: String },
      },
    ],
    certifications: [
      {
        name: { type: String },
        issuingOrganization: { type: String },
        issueDate: { type: Date },
        expirationDate: { type: Date },
        description: { type: String },
      },
    ],
    workExperience: [
      {
        jobTitle: String,
        company: String,
        startDate: Date,
        endDate: Date,
        isWorking: Boolean,
        achievements: String,
      },
    ],
    projects: [
      {
        project: String,
        startDate: Date,
        endDate: Date,
        isCurrent: Boolean,
        description: String,
        skills: [String],
      },
    ],
    socialMedia: {
      facebook: {
        type: String,
        default: "",
      },
      twitter: {
        type: String,
        default: "",
      },
      instagram: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
      github: {
        type: String,
        default: "",
      },
      portfolio: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
