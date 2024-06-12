import React from "react";
import { jobData } from "../utils/table-datas";
import { Link } from "react-router-dom";

function JobTable() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-3">All Jobs</h1>
      <table className="w-full text-center border-2 border-cyan-600 rounded-lg">
        <thead className="uppercase bg-[#8B93FF] text-[#FFF7FC] text-sm">
          <tr>
            <th className="py-2">job</th>
            <th className="py-2">company</th>
            <th className="py-2">status</th>
            <th className="py-2">applicants</th>
            <th className="py-2">selected</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((data) => (
            <tr key={data.id} className="border-b border-blue-400 px-2">
              <td className="py-2">{data.job}</td>
              <td className="py-2">{data.company}</td>
              <td className="py-2">{data.status}</td>
              <td className="py-2">{data.applicants}</td>
              <td className="py-2">{data.selected}</td>
              <td className="py-2">
                <Link className="bg-[#8B93FF] text-[#FFF7FC] px-3 py-1 rounded-lg">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobTable;
