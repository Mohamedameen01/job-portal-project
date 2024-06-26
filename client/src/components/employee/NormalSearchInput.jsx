import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LiaFileUploadSolid } from "react-icons/lia";
function NormalSearchInput() {
  return (
    <div className="w-full grid justify-center lg:hidden mt-4 px-4">
      <form noValidate autoComplete="off" className="grid gap-3">
        <div className="px-3 py-4 flex items-center gap-2 bg-white text-slate-950 rounded-md shadow-md shadow-slate-400 ">
          <div className="text-xl ">
            <CiSearch />
          </div>
          <input
            className="outline-none"
            type="text"
            placeholder="job title or company"
          />
        </div>
        <div className="px-3 py-4 flex items-center gap-2 bg-white text-slate-950 rounded-md shadow-md shadow-slate-400">
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
      <div className="mt-3 flex justify-center items-center gap-2 px-3 py-2 text-violet-700 outline outline-2 outline-violet-600  rounded-md cursor-pointer ">
        <div className="text-2xl ">
          <LiaFileUploadSolid />
        </div>
        <p className="antialiased font-medium">Upload your CV</p>
      </div>
    </div>
  );
}

export default NormalSearchInput;
