import React from "react";
import { Link } from "react-router-dom";
function ReportList({ title }) {
  return (
    <div className="bg-[#8B93FF] text-[#FFF7FC] my-3 grid grid-cols-4 items-center gap-3 py-2 rounded-md shadow-md">
      <h3 className="ms-4 capitalize">{title}</h3>
      <div className="flex justify-center">
        <label htmlFor="fromDate">From</label>
        <input
          className="text-slate-400 mx-2 outline outline-cyan-600 outline-1 rounded-md text-center"
          type="date"
          name="fromDate"
        />
      </div>
      <div className="flex justify-center">
        <label htmlFor="toDate">To</label>
        <input
          className="text-slate-400 mx-2 outline outline-cyan-600 outline-1 rounded-md text-center"
          type="date"
          name="toDate"
        />
      </div>
      <div className="flex justify-center">
        <Link className="w-fit text-center bg-violet-500 text-[#FFF7FC] px-3 py-1 rounded-md">
          Generate
        </Link>
      </div>
    </div>
  );
}

export default ReportList;
