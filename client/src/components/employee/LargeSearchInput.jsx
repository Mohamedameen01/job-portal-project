import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LiaFileUploadSolid } from "react-icons/lia";

function LargeSearchInput() {
  return (
    <div className="hidden lg:block">
      <form
        noValidate
        autoComplete="off"
        className="flex  bg-white w-fit mt-4 px-5 py-8 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-2 text-slate-950">
          <div className="text-xl ">
            <CiSearch />
          </div>
          <input
            className="outline-none"
            type="text"
            placeholder="job title or company"
          />
        </div>
        <div className="flex items-center gap-2 text-slate-950">
          <div className="text-xl ">
            <CiLocationOn />
          </div>
          <input
            className="outline-none"
            type="text"
            placeholder="City or postcode"
          />
        </div>
        <button className="outline-none bg-[#673ab7] text-white px-5 py-3 rounded-md">
          Find Jobs
        </button>
      </form>
      <div className="mt-3 ms-2 w-fit flex items-center gap-2 px-3 py-2 text-violet-700 outline outline-2 outline-violet-600 hover:outline-cyan-500 hover:text-blue-500 rounded-lg cursor-pointer ">
        <div className="text-2xl ">
          <LiaFileUploadSolid />
        </div>
        <p className="antialiased font-medium">Upload your CV</p>
      </div>
    </div>
  );
}

export default LargeSearchInput;
