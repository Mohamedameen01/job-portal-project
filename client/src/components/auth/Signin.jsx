import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

import { employeeSignin } from "../../redux/authSlice";
import GoogleSignin from "./GoogleSignin";
import MobileSignin from "./MobileSignin";

function Signin() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
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
  } = useForm();

  const onSubmit = (data) => {
    dispatch(employeeSignin(data));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-fit h-[80%] md:h-fit flex flex-col gap-4 bg-white m-3  px-5 py-5 rounded-lg shadow-md scroll-smooth overflow-y-auto">
        <div className="relative text-center">
          <div className="absolute -top-9 -left-8 border-1 rounded-md p-1 bg-transparent text-2xl text-cyan-500 hover:text-blue-700 hover:border-blue-500 cursor-pointer">
            <AiOutlineHome />
          </div>
          <h1 className="text-[#673ab7] text-lg md:text-2xl font-bold">
            Hi, Welcome Back
          </h1>
          <p className="text-[#0000008a] text-sm md:text-md font-semibold my-2">
            Enter your credentials to continue
          </p>
        </div>

        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col my-2">
            <input
              className={`py-2 ps-2 rounded-md ${
                emailFocused
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
              className={`absolute left-2 text-sm transition-all duration-300 ease-in-out ${
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

          <div className="relative flex flex-col mt-4 mb-3">
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
              className={`absolute left-2 text-sm transition-all duration-300 ease-in-out ${
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

          <div className="grid justify-center gap-2 md:flex md:gap-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="before:content[''] peer relative h-4 w-4 cursor-pointer  rounded-md border-3 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-900  checked:bg-blue-900 checked:before:bg-gray-900 hover:before:opacity-10"
              />
              <p className="text-sm text-slate-700">Remember me</p>
            </div>
            <p className="capitalize text-[#673ab7] font-semibold text-sm cursor-pointer">
              forgot password?
            </p>
          </div>

          <button
            className="w-full my-3 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md "
            type="submit"
          >
            Sign in
          </button>

          <p className="mt-2 subpixel-antialiased text-center text-sm font-semibold">
            <Link to={"/signup"}>Don't have an account?</Link>
          </p>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-full border-1 border-b-black"></div>
          <p className="text-[#0000008a] text-xs ">OR</p>
          <div className="w-full border-1 border-b-black"></div>
        </div>

        <div className="grid justify-center md:flex gap-3 my-1">
          <GoogleSignin />
          <MobileSignin history={"signin"} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
