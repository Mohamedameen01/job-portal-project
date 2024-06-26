import React from "react";
import { jobData } from "../../../utils/table-datas";
import { Link } from "react-router-dom";

function JobTable() {
  return (
    <div className="flex flex-1">
      <table className="bg-[#ffffff] w-full text-center rounded-lg">
        <thead className="uppercase text-[#000000] border text-sm font-semibold">
          <tr>
            <td className="py-3">#</td>
            <td className="py-3">job</td>
            <td className="py-3">company</td>
            <td className="py-3">status</td>
            <td className="py-3">applicants</td>
            <td className="py-3">selected</td>
            <td className="py-3"></td>
          </tr>
        </thead>
        <tbody>
          {jobData.map((data, index) => (
            <tr key={data.id} className="border-b px-2 capitalize text-sm">
              <td className="py-3">{index + 1}</td>
              <td className="py-3">{data.job}</td>
              <td className="py-3">{data.company}</td>
              <td className="py-3">
                <span
                  className={`px-2 py-1 rounded-full ${
                    data.status === "recruiting"
                      ? "bg-green-200 text-green-900"
                      : "bg-red-200 text-red-900"
                  }`}
                >
                  {data.status}
                </span>
              </td>
              <td className="py-3">{data.applicants}</td>
              <td className="py-3">{data.selected}</td>
              <td className="py-3">
                <Link
                  to={`/administrator/jobs/${data.id}`}
                  className="bg-[#8B93FF] text-[#FFF7FC] px-3 py-1 rounded-lg"
                >
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
