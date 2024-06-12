import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center items-center h-[60vh] mt-5">
      <div className="border-2 border-blue-600 shadow-lg shadow-slate-600 rounded-lg ">
        <form className=" p-3" autoComplete="off">
          <h1 className="text-center text-xl font-semibold my-3">Sign Up</h1>
          <div className="flex flex-col  mb-1">
            <input
              className="outline outline-1 outline-blue-500 p-2"
              type="text"
              placeholder="First Name"
              name="first-name"
            />
            <label htmlFor="first-name">First Name</label>
          </div>
          <div className="flex flex-col mb-1">
            <input
              className="outline outline-1 outline-blue-500 p-2"
              type="text"
              placeholder="Last Name"
              name="last-name"
            />
            <label htmlFor="last-name">Last Name</label>
          </div>
          <div className="flex flex-col mb-1">
            <input
              className="outline outline-1 outline-blue-500 p-2"
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="flex flex-col mb-1">
            <input
              className="outline outline-1 outline-blue-500 p-2"
              type="password"
              placeholder="Password"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="flex flex-col mb-1">
            <input
              className="outline outline-1 outline-blue-500 p-2"
              type="password"
              placeholder="Confirm Password"
              name="re-password"
            />
            <label htmlFor="re-password">Confirm Password</label>
          </div>
          <button
            className="my-3 px-3 py-1 border-2 border-blue-500 "
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="flex flex-wrap">
          <p>Already have an account? </p>
          <span>
            <Link to={"/signin"}>Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
