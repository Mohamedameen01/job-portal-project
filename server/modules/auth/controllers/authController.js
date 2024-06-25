import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import twilio from "twilio";

import Employee from "../../user/models/employeeSchema.js";
import { generateVerificationOtp } from "../../../utils/authFuncs.js";

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res.status(400).json({ message: "Employee Not Found" });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = await jwt.sign(
      { id: employee._id, name: employee.name },
      process.env.JWT_CODE,
      { expiresIn: "2d" }
    );
    res.status(201).json({ token, employee });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const registerEmployee = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if (employee) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const newEmployee = new Employee({
      username,
      email,
      password: hasedPassword,
    });
    await newEmployee.save();
    return res.status(200).json({ message: "Employee Registration Completed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// export const googleLoginEmployee = async (req, res) => {
//   try {
//     const { email, name, picture } = req.body;

//     const employee = await Employee.findOne({ email });

//     if (employee) {
//       console.log("UNd");
//       return res.status(400).json({ message: "Email Already Exists" });
//     }

//     const newEmployee = new Employee({
//       username: name,
//       email,
//       picture,
//     });
//     await newEmployee.save();
//     const token = await jwt.sign(
//       { id: employee._id, name: employee.name },
//       process.env.JWT_CODE,
//       { expiresIn: "2d" }
//     );
//     res.status(201).json({ token, employee });
//     return res.status(200).json({ message: "Employee Signed in with Google" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server Error" });
//   }
// };

export const mobileVerifyEmployee = async (req, res) => {
  try {
    const { phone } = req.body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    const verificationOtp = await generateVerificationOtp();

    const message = await client.messages.create({
      body: `Your mobile sign in verification code is: ${verificationOtp}`,
      from: process.env.TWILIO_FROM_NO,
      to: phone,
    });

    res.status(200).json({
      otp: verificationOtp,
      message: "OTP has been sent to your mobile number",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const mobileSignin = async (req, res) => {
  try {
    const { phone } = req.body;

    const employee = await Employee.findOne({ phone });

    if (employee) {
      return res
        .status(400)
        .json({ message: "This Mobile Number Already Exists" });
    }

    const newEmployee = new Employee({
      phone,
    });
    await newEmployee.save();
    res.status(200).json({
      message: "Mobile Sign In Successfully Completed",
    });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
