import mongoose, { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Employer",
    },
    applicants: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Employee",
      default: [],
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: [
        "Healthcare & Medical",
        "Software Development & IT",
        "Finance & Accounting",
        "Education & Training",
        "Engineering & Technical",
        "Construction & Skilled Trades",
        "Sales, Marketing & Advertising",
        "Customer Service & Support",
        "Human Resources & Recruitment",
        "Management & Executive",
      ],
    },
    employmentType: {
      type: String,
      required: true,
      enum: [
        "Freelancer",
        "Full-time",
        "Part-time",
        "Internship",
        "Permanent",
        "Contract",
        "Temporary",
      ],
    },
    qualification: {
      type: String,
      required: true,
      enum: [
        "High School Diploma or Equivalent",
        "Bachelors Degree",
        "Masters Degree",
        "Doctorate (Ph.D. or equivalent)",
        "Professional Certification",
        "Postgraduate Certificate/Diploma",
      ],
    },
    experience: {
      type: String,
      required: true,
      enum: ["Fresher", "0-1", "1-2", "2-4", "4-6", ">6"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    skills: {
      type: [String],
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: ["On-site", "Remote", "W-F-H", "Hybrid"],
    },
    offeredSalary: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    shortListed: {
      type: [mongoose.Types.ObjectId],
      ref: "User",
      default: [],
    },
    rejected: {
      type: [mongoose.Types.ObjectId],
      ref: "User",
      default: [],
    },
    jobPlace: {
      type: String,
    },
  },
  { timestamps: true }
);

const Job = model("Job", jobSchema);
export default Job;
