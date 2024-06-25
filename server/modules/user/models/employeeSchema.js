import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
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
  resume: { type: String }, // URL or path to resume file
  skills: [String],
  experience: [
    {
      jobTitle: { type: String },
      company: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: { type: String },
    },
  ],
  education: [
    {
      institution: { type: String },
      degree: { type: String },
      fieldOfStudy: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
    },
  ],
  certifications: [
    {
      name: { type: String },
      issuingOrganization: { type: String },
      issueDate: { type: Date },
      expirationDate: { type: Date },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Employee = model("Employee", employeeSchema);

export default Employee;
