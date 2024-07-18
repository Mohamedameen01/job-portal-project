import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import twilio from "twilio";

import User from "../../../models/userSchema.js";
import { generateVerificationOtp } from "../../../utils/authFuncs.js";

// Memory Store
const otpStore = {};

// Registration with email:
export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(200).json({ message: "Registration Completed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Sign in with email:
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = await jwt.sign(
      { id: user._id, name: user.username, email: user.email },
      process.env.JWT_CODE,
      { expiresIn: "2d" }
    );
    res.status(201).json({ token, user, message: "Signed In " });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

//  Sign in with Google Account:
export const googleLogin = async (req, res) => {
  try {
    const { email, name, picture } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const newUser = new User({
      username: name,
      email,
      picture,
    });
    await newUser.save();

    const token = await jwt.sign(
      {
        id: newUser._id,
        name: newUser.username,
        email: newUser.email,
      },
      process.env.JWT_CODE,
      { expiresIn: "2d" }
    );
    return res
      .status(200)
      .json({ token, employee, message: "Signed in with Google" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

//  Mobile Verification:
export const mobileVerify = async (req, res) => {
  try {
    const { phone } = req.body;

    const user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ message: "Phone Number Exists" });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    const verificationOtp = await generateVerificationOtp();
    const otpExpires = Date.now() + 10 * 60 * 1000;

    // Store OTP in-memory
    otpStore[phone] = { otp: verificationOtp, expires: otpExpires };

    const msg = await client.messages.create({
      body: `Your mobile sign in verification code is: ${verificationOtp}`,
      from: process.env.TWILIO_FROM_NO,
      to: phone,
    });

    res.status(200).json({
      message: "OTP has been Sent to Your Mobile Number",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//  Mobile Signin after Verification
export const mobileSignin = async (req, res) => {
  try {
    const { phone, inputOtp } = req.body;

    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(400).json({ message: "Invalid Mobile Number" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP Expired" });
    }

    const isMatch = await bcrypt.compare(inputOtp, user.otp);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Reset OTP
    user.otp = "";
    user.otpExpires = Date.now();
    await user.save();

    const token = await jwt.sign(
      { id: user._id, phone: user.phone },
      process.env.JWT_CODE,
      { expiresIn: "2d" }
    );
    res.status(200).json({
      token,
      user,
      message: "Mobile Sign In Successfully Completed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
