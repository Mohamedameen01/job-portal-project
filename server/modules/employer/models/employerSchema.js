import { Schema, model } from "mongoose";

export const employerSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    logo: { type: String },
    companyName: { type: String },
    companyMail: { type: String },
    companyContact: { type: String },
    companyAddress: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String },
    },
    website: { type: String },
    founded: { type: Date },
    size: { type: String },
    about: { type: String },
    industry: { type: String },
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
    },
    totalJobs: { type: Number },
    activeJobs: { type: Number },
    shortlistedJobs: [
      {
        type: Schema.Types.ObjectId,
        // ref: "Job",
      },
    ],
  },
  { timestamps: true }
);

const Employer = model("Employer", employerSchema);
export default Employer;
