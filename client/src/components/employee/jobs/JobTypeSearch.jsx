import React from "react";
import { jobType } from "../../../utils/job-search";

function JobTypeSearch() {
  return (
    <div>
      <h1 className="font-semibold text-lg">Job type</h1>
      <ul className="mt-3">
        {jobType.map((item) => (
          <li className="py-1 " key={item}>
            <label className="flex items-center text-slate-600 cursor-pointer">
              <input type="checkbox" value={item} className="sr-only peer" />
              <div className="relative w-11 h-5 bg-slate-50 outline outline-1 outline-slate-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:start-4 peer-checked:after:bg-white rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-1 after:bg-slate-300 after:border-gray-300  after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-blue-600 "></div>

              <span className="ms-3 text-sm  ">{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobTypeSearch;
