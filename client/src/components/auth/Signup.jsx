import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

import { employeeSignup } from "../../redux/authSlice.js";

function Signup() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confPasswordFocused, setConfPasswordFocused] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
    setPasswordFocused(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(employeeSignup(data));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[30%] flex flex-col gap-4 bg-white p-5 shadow-md rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#673ab7] text-2xl font-bold">Sign up</h1>
          <p className="text-[#0000008a] text-md font-semibold">
            Enter your credentials to continue
          </p>
          <p className="text-[#364152] text-md font-semibold">
            Sign up with Email address
          </p>
        </div>

        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col my-4">
            <input
              className={`py-2 ps-2 rounded-md ${
                nameFocused
                  ? "outline outline-1 outline-cyan-500"
                  : "outline outline-1 outline-blue-500"
              }`}
              type="text"
              name="username"
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              {...register("username", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Must be more than 3 characters.",
                },
                maxLength: {
                  value: 18,
                  message: "Must be less than 18 characters.",
                },
              })}
            />
            <label
              className={`absolute text-xs transition-all duration-300 ease-in-out ${
                nameFocused
                  ? "-top-5 left-1 text-xs text-blue-500"
                  : "top-2 left-2 text-slate-500"
              }`}
              htmlFor="username"
            >
              Username
            </label>
            {errors.username && (
              <small className="text-red-600">
                {errors.username?.message}{" "}
              </small>
            )}
          </div>

          <div className="relative flex flex-col my-4">
            <input
              className={`py-2 ps-2 rounded-md ${
                passwordFocused
                  ? "outline outline-1 outline-cyan-500"
                  : "outline outline-1 outline-blue-500"
              }`}
              type="email"
              name="email"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <label
              className={`absolute left-2 text-xs transition-all duration-300 ease-in-out ${
                emailFocused
                  ? "-top-5 left-1 text-xs text-blue-500"
                  : "top-2 text-slate-500"
              }`}
              htmlFor="email"
            >
              Email Address
            </label>
            {errors.email && (
              <small className="text-red-600">{errors?.email?.message}</small>
            )}
          </div>

          <div className="relative flex flex-col mt-4">
            <input
              className={`py-2 ps-2 rounded-md ${
                passwordFocused
                  ? "outline outline-1 outline-cyan-500"
                  : "outline outline-1 outline-blue-500"
              }`}
              type={togglePassword ? "text" : "password"}
              name="password"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Must be more than 4 characters.",
                },
                maxLength: {
                  value: 10,
                  message: "Must be less than 10 characters.",
                },
              })}
            />
            <label
              className={`absolute left-2 text-xs transition-all duration-300 ease-in-out ${
                passwordFocused
                  ? "-top-5 left-1 text-xs text-blue-500"
                  : "top-2 text-slate-500 "
              }`}
              htmlFor="password"
            >
              Password
            </label>
            {errors.password && (
              <small className="text-red-600">
                {errors?.password?.message}
              </small>
            )}
            <div
              className="absolute top-3 right-1 text-xl cursor-pointer"
              onClick={handleTogglePassword}
            >
              {togglePassword ? <BiShow /> : <BiHide />}
            </div>
          </div>

          <div className="relative flex flex-col mt-4">
            <input
              className={`py-2 ps-2 rounded-md ${
                confPasswordFocused
                  ? "outline outline-1 outline-cyan-500"
                  : "outline outline-1 outline-blue-500"
              }`}
              type="password"
              name="rePassword"
              onFocus={() => setConfPasswordFocused(true)}
              onBlur={() => setConfPasswordFocused(false)}
              {...register("rePassword", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Must be more than 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Must be less than 10 characters",
                },
                validate: (value) =>
                  value === watch("password", "") ||
                  "The passwords do not match ",
              })}
            />
            <label
              className={`absolute left-2 text-xs transition-all duration-300 ease-in-out ${
                confPasswordFocused
                  ? "-top-5 left-1 text-xs text-blue-500"
                  : "top-2 text-slate-500 "
              }`}
              htmlFor="re-password"
            >
              Confirm Password
            </label>
            {errors.rePassword && (
              <small className="text-red-600">
                {errors.rePassword?.message}
              </small>
            )}
          </div>

          <button
            className="w-full my-4 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md "
            type="submit"
          >
            Sign up
          </button>

          <p className="mt-2 subpixel-antialiased text-center text-sm font-semibold">
            <Link to={"/signin"}>Already have an account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
