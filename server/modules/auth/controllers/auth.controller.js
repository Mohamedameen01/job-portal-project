import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import twilio from "twilio";

import User from "../../../models/user.schema.js";
import { generateVerificationOtp } from "../../../utils/auth.funcs.js";
import OTP from "../../../models/otp.schema.js";

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

    return res
      .status(200)
      .json({ user: newUser, message: "Registration Completed" });
  } catch (error) {
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
      return res.status(400).json({ message: "Password does not match" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.username, email: user.email },
      process.env.JWT_CODE,
      { expiresIn: "7d" }
    );
    
    res
      .status(201)
      .json({ token, user, role: user.role, message: "Signed In " });
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

    const token = jwt.sign(
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

    const verificationOtp = generateVerificationOtp();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    const hashedOtp = await bcrypt.hash(verificationOtp, 10);
    const newOtp = new OTP({
      phoneNumber: phone,
      otp: hashedOtp,
      expiresAt: otpExpires,
    });
    await newOtp.save();

    const msg = await client.messages.create({
      body: `Your mobile sign in verification code is: ${verificationOtp}`,
      from: process.env.TWILIO_FROM_NO,
      to: phone,
    });

    res.status(200).json({
      message: "OTP Sent to Your Mobile",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

//  Mobile Signin after Verification
export const mobileSignin = async (req, res) => {
  try {
    const { phone, inputOtp } = req.body;
    
    const record = await OTP.findOne({ phoneNumber: phone });

    if (!record) {
      return res.status(400).json({ message: "Invalid mobile number" });
    }

    const isMatch = await bcrypt.compare(inputOtp, record.otp);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    
    if (new Date(Date.now()) > record.expiresAt) { 
      return res.status(400).json({ message: "OTP has expired" });
    }

    let user = await User.findOne({phone})
    if (!user) {
      user = new User({
        phone,
      });
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, phone: user.phone },
      process.env.JWT_CODE,
      { expiresIn: "7d" }
    );
    
    res.status(200).json({
      message: "Mobile Sign In Successfully Completed",
      token,
      user,
      role: user.role,
    });
    await OTP.deleteOne({ phoneNumber: phone });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
