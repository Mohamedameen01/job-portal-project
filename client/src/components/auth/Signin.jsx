import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { employeeSignin, selectAuth } from "../../redux/authSlice";

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
      <div className="w-[30%] flex flex-col gap-4 bg-white p-5 rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#673ab7] text-2xl font-bold">
            Hi, Welcome Back
          </h1>
          <p className="text-[#0000008a] text-md font-semibold">
            Enter your credentials to continue
          </p>
        </div>

        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="before:content[''] peer relative h-4 w-4 cursor-pointer  rounded-md border-3 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-900  checked:bg-blue-900 checked:before:bg-gray-900 hover:before:opacity-10"
              />
              <p className="text-sm text-slate-700">Keep me logged in</p>
            </div>
            <p className="capitalize text-[#673ab7] font-semibold text-sm">
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
      </div>
    </div>
  );
}

export default Signin;
