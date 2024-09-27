import mongoose, { Schema, model } from "mongoose";

const educationSchema = new Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  fieldOfStudy: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  grade: { type: String, default: "" },
});

const certificationSchema = new Schema({
  certificateName: { type: String, required: true },
  issuedOrganization: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, default: "" },
});

const experienceSchema = new Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isWorking: { type: Boolean, default: false },
  achievements: { type: String, default: "" },
});

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isWorking: { type: Boolean, default: false },
  description: { type: String, default: "" },
  skills: { type: [String], default: [] },
});

const preferenceSchema = new Schema({
  resume: { type: String, default: "" },
  currentCTC: { type: String, default: "" },
  expectedCTC: { type: String, default: "" },
  totalExperience: { type: String, default: "" },
  prefferedLocation: { type: String, default: "" },
  skills: { type: [String], default: [] },
  languages: { type: [String], default: [] },
  aboutYourSelf: { type: String, default: "" },
});

const socialMediaSchema = new Schema({
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
});

const appliedJobSchema = new Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const bookMarkedJobsSchema = new Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const employeeSchema = new Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    appliedJobs: {
      type: [appliedJobSchema],
      default: [],
    },
    shortListed: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    rejected: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Job",
      default: []
    },
    bookMarkedJobs: {
      type: [bookMarkedJobsSchema],
      default: []
    },
    education: { type: [educationSchema], default: [] },
    certifications: { type: [certificationSchema], default: [] },
    workExperience: { type: [experienceSchema], default: [] },
    projects: { type: [projectSchema], default: [] },
    preference: { type: preferenceSchema, default: {} },
    socialMedia: { type: socialMediaSchema, default: {} },
  },
  { timestamps: true }
);

const Employee = model("Employee", employeeSchema);

export default Employee;
