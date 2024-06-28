import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function TextSearch({ firsttitle, secondtitle }) {
  return (
    <div className="grid gap-4">
      <h1 className="font-semibold text-lg">{firsttitle}</h1>
      <div className="w-fit px-3 py-3 flex justify-between items-center gap-2 border-1 border-[#ecedf2] text-slate-950 bg-white rounded-md">
        <div className="mt-1">
          <CiSearch />
        </div>
        <input
          className="outline-none"
          type="text"
          placeholder="job title or company"
        />
      </div>

      <h1 className="font-semibold text-lg">{secondtitle}</h1>
      <div className="w-fit px-3 py-3 flex justify-between items-center gap-2 border-1 border-[#ecedf2] text-slate-950 bg-white rounded-md">
        <div className="mt-1">
          <CiLocationOn />
        </div>
        <input className="outline-none" type="text" placeholder="City " />
      </div>
    </div>
  );
}

export default TextSearch;
