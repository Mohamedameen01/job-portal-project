import React from "react";
import banner from "../../assets/banner.jpg";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LiaFileUploadSolid } from "react-icons/lia";

function HomeBanner() {
  return (
    <div
      className="w-full h-[90vh]  bg-[#e1e1ef] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-[1280px] h-full mx-auto flex flex-col justify-center gap-3 ">
        <div className="flex flex-col gap-1 capitalize text-4xl font-bold subpixel-antialiased text-[#673ab7]">
          <p>Find yout perfect job</p>
          <p>Match</p>
        </div>

        <p className="antialiased text-[#0000008a] font-medium">
          Find Jobs, Employment & Career Opportunities
        </p>

        <form
          noValidate
          autoComplete="off"
          className="flex bg-white w-fit mt-4 px-5 py-8 rounded-lg shadow-lg"
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

        <div className="mt-2 ms-2 w-fit flex items-center gap-2 px-3 py-2 text-violet-700 outline outline-2 outline-violet-600 hover:outline-cyan-500 hover:text-blue-500 rounded-lg cursor-pointer ">
          <div className="text-2xl ">
            <LiaFileUploadSolid />
          </div>
          <p className="antialiased font-medium">Upload your CV</p>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
