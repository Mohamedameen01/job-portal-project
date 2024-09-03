import { model, Schema } from "mongoose";

const otpSchema = new Schema({
  phoneNumber: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: String, required: true },
});

const OTP = model("OTP", otpSchema);
export default OTP