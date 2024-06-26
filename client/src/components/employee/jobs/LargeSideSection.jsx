import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import CategorySearch from "./CategorySearch";
import JobTypeSearch from "./JobTypeSearch";

function LargeSideSection() {
  return (
    <div className="my-5 grid gap-5">
      <div className="grid gap-3">
        <h1 className="font-semibold text-lg">Search by keywords</h1>
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

        <h1 className="font-semibold text-lg">Location</h1>
        <div className="w-fit px-3 py-3 flex justify-between items-center gap-2 border-1 border-[#ecedf2] text-slate-950 bg-white rounded-md">
          <div className="mt-1">
            <CiLocationOn />
          </div>
          <input className="outline-none" type="text" placeholder="City " />
        </div>
        <p className="text-sm">Radius around selected destination</p>

        <CategorySearch />
        <JobTypeSearch />
      </div>
    </div>
  );
}

export default LargeSideSection;
