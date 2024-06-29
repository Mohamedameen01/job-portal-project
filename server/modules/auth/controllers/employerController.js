import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import twilio from "twilio";

import Employer from "../../employer/models/employerSchema.js";

// Employer Registration with Email:
export const registerEmployer = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const employer = await Employer.findOne({ email });
    if (employer) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newEmployer = new Employer({
      username,
      email,
      password: hashedPassword,
    });
    await newEmployer.save();
    console.log(newEmployer);
    return res.status(200).json({ message: "Registration Completed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
