import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

import GoogleSignin from "./GoogleSignin";
import MobileSignin from "./MobileSignin";
import Loader from "../Loader.jsx";
import { TitleRendering } from "../user";

import {
  resetAuthSuccess,
  setUserAuthLocal,
  signin,
} from "../../redux/authSlice.js";

function Signin() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [diffPage, setDiffPage] = useState(false);
  const [titleRender, setTitleRender] = useState(false);

  const { success, loading } = useSelector((state) => state.userAuth);

  const location = useLocation().state; 
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(signin(data));
  };

  useEffect(() => {
    if (success) {
      dispatch(setUserAuthLocal());

      const timer = setTimeout(() => {
        dispatch(resetAuthSuccess());
        
        navigate("/auth/info-form");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (location?.landValue) {
      setTitleRender(true);

      const timeout = setTimeout(() => {
        setTitleRender(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [location?.landValue]);

  if (titleRender) {
    return <TitleRendering title={location?.title} />;
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-fit h-[80%] md:h-fit flex flex-col gap-4 bg-white m-3  px-5 py-5 rounded-lg shadow-md scroll-smooth overflow-y-auto">
        <div className="relative text-center">
          <Link
            to={"/"}
            className="absolute -top-9 -left-8 border-1 rounded-md p-1 bg-transparent text-2xl text-cyan-500 hover:text-blue-700 hover:border-blue-500 cursor-pointer"
          >
            <AiOutlineHome />
          </Link>
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
              className={`py-2 ps-2 bg-white rounded-md ${
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
              className={`absolute left-2  text-sm transition-all duration-300 ease-in-out ${
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
              className={`py-2 ps-2 bg-white rounded-md ${
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

          <p className="capitalize text-[#673ab7] font-semibold text-sm cursor-pointer">
            forgot password?
          </p>

          {loading ? (
            <Loader />
          ) : (
            <button
              className="w-full my-3 px-3 py-2 bg-violet-900 text-white font-semibold rounded-md "
              type="submit"
            >
              Sign in
            </button>
          )}

          <p className="mt-2 subpixel-antialiased text-center text-sm font-semibold">
            <Link to={"/auth/signup"}>Don't have an account?</Link>
          </p>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-full border-1 border-b-black"></div>
          <p className="text-[#0000008a] text-xs ">OR</p>
          <div className="w-full border-1 border-b-black"></div>
        </div>

        <div className="grid justify-center md:flex gap-3 my-1">
          <GoogleSignin diffPage={diffPage} />
          <MobileSignin diffPage={diffPage} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
