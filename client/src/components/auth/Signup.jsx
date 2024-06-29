import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

import GoogleSignin from "./GoogleSignin.jsx";
import MobileSignin from "./MobileSignin.jsx";

import {
  employeeSignup,
  resetEmployeeSuccess,
} from "../../redux/employeeSlice.js";
import {
  employerSignup,
  resetEmployerSuccess,
} from "../../redux/employerSlice.js";

function Signup() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confPasswordFocused, setConfPasswordFocused] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [diffPage, setDiffPage] = useState(false);

  const employee = useSelector((state) => state.employeeAuth);
  const employer = useSelector((state) => state.employerAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/signup") {
      setDiffPage(true);
    }
  }, [pathname]);

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
    if (diffPage) {
      return dispatch(employeeSignup(data));
    }
    dispatch(employerSignup(data));
  };

  useEffect(() => {
    if (employee.success || employer.success) {
      const timer = setTimeout(() => {
        if (diffPage) {
          dispatch(resetEmployeeSuccess());
          navigate("/signin");
        } else {
          dispatch(resetEmployerSuccess());
          navigate("/employer/signin");
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [employee, employer, navigate]);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-fit h-[80%] flex flex-col gap-3 bg-white mx-3 p-5 shadow-md rounded-lg scroll-smooth overflow-y-scroll">
        <div className="relative text-center ">
          <Link
            to={"/"}
            className="absolute -top-9 -left-8 border-1  rounded-md p-1 bg-transparent text-2xl text-cyan-500 hover:text-blue-700 hover:border-blue-500 cursor-pointer"
          >
            <AiOutlineHome />
          </Link>
          <h1 className="text-[#673ab7] text-2xl font-bold">Sign up</h1>
          <p className="text-[#0000008a] text-md font-semibold my-2">
            Enter your credentials to continue
          </p>
        </div>

        <p className="text-[#364152] text-center text-md font-semibold">
          Sign up with Email address
        </p>

        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col ">
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
                  : "top-3 left-2 text-slate-500"
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
                  : "top-3 text-slate-500"
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
                  : "top-3 text-slate-500 "
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
                  : "top-3 text-slate-500 "
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
          {employee.loading || employer.loading ? (
            <div className="flex  justify-center gap-3 items-center w-full my-3 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md ">
              <svg
                aria-hidden="true"
                className="w-6 h-6  animate-spin text-white fill-violet-900"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span>Loading...</span>
            </div>
          ) : (
            <button
              className="w-full my-4 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md "
              type="submit"
            >
              Sign up
            </button>
          )}

          <p className="mt-1 subpixel-antialiased text-center text-sm font-semibold">
            <Link to={diffPage ? "/signin" : "/employer/signin"}>
              Already have an account?
            </Link>
          </p>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-full border-1 border-b-black"></div>
          <p className="text-[#0000008a] text-xs ">OR</p>
          <div className="w-full border-1 border-b-black"></div>
        </div>

        <div className="grid justify-center md:flex gap-3 my-1">
          <GoogleSignin />
          <MobileSignin history={"signup"} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
