import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  employeeMobileSignin,
  employeeMobileVerification,
} from "../../redux/employeeSlice.js";
import { MdClose } from "react-icons/md";

function SmsForm() {
  const [value, setValue] = useState("");
  const [valueError, setValueError] = useState(null);

  const [inputOtp, setInputOtp] = useState("");
  const [inputOtpError, setInputOtpError] = useState(null);

  const [toggleMsgInput, setToggleMsgInput] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.employeeAuth);

  const handleSendButton = () => {
    if (!value) {
      return setValueError("Your mobile number is required");
    }
    setValueError(null);

    dispatch(employeeMobileVerification({ phone: value }));
    setToggleMsgInput(true);
  };

  const handleSubmitButton = () => {
    if (!inputOtp) {
      return setInputOtpError("Please enter your otp");
    }

    if (user == inputOtp) {
      setInputOtpError(null);
      dispatch(employeeMobileSignin({ phone: value }));
    } else {
      setInputOtpError("Invalid OTP. Please try again");
    }
  };

  const handleBackButton = () => {
    if (location.state?.from === "signup") {
      navigate("/signup");
    } else if (location.state?.from === "signin") {
      navigate("/signin");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-3">
      <div className="relative w-fit p-5 flex flex-col justify-center items-center gap-3 bg-white rounded-md shadow-md">
        <div
          onClick={handleBackButton}
          className="absolute top-2 right-2 border-1 border-cyan-200 rounded-md p-1 bg-transparent text-2xl text-black hover:text-blue-700 hover:border-blue-500 cursor-pointer "
        >
          <MdClose />
        </div>
        <h1 className="text-[#0000008a] text-md font-semibold my-2">
          Sign In with Mobile
        </h1>
        <PhoneInput
          className="w-full py-3 px-3 rounded-md  outline outline-1 outline-cyan-500 "
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
        {valueError && <small className="text-red-600">{valueError}</small>}
        <button
          onClick={handleSendButton}
          className="w-full my-2 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md cursor-pointer"
        >
          Send SMS
        </button>
        {toggleMsgInput && (
          <div className="w-full flex flex-col gap-2">
            <input
              type="text"
              className="outline outline-1 outline-cyan-500 px-2 py-2 rounded-md text-md"
              placeholder="x-x-x-x"
              name="otp"
              value={inputOtp}
              onChange={(e) => setInputOtp(e.target.value)}
            />
            {inputOtpError && (
              <small className="text-red-600">{inputOtpError}</small>
            )}
            <button
              onClick={handleSubmitButton}
              className="my-2 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md cursor-pointer"
            >
              Submit SMS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SmsForm;
