import React from "react";
import { IoFilterOutline } from "react-icons/io5";

function JobSectionHeader({ setToggleValue }) {
  return (
    <div className="grid mx-auto md:flex lg:justify-end gap-3">
      <div className="w-fit mx-auto px-3 md:px-4 py-1 flex items-center gap-3 bg-white text-blue-500 text-md  rounded-md shadow-sm lg:hidden">
        <IoFilterOutline />
        <p onClick={() => setToggleValue(true)} className="tracking-wide">
          Filter
        </p>
      </div>

      <div className="grid md:flex gap-3">
        <button className="hidden md:block px-[10px] py-2 outline outline-1 outline-red-500 antialiased text-black rounded-md hover:bg-red-500 hover:text-white">
          Clear All
        </button>
        <select className="text-sm bg-white outline outline-1 outline-slate-300 px-2 py-2 rounded-md">
          <option value="sort by (default)">Sort by (Default)</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <button className="md:hidden px-[10px] py-2 bg-red-500 antialiased text-white font-medium rounded-md">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default JobSectionHeader;
