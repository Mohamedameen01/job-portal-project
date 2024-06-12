import React from "react";
import { companyData } from "../utils/table-datas";
import { Link } from "react-router-dom";

function CompanyTable() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-3">All Companies</h1>
      <table className="w-full text-center border-2 border-cyan-600 rounded-lg">
        <thead className="bg-[#8B93FF] text-[#FFF7FC] text-sm">
          <tr>
            <th className="py-2">COMPANY</th>
            <th className="py-2">TOTAL JOBS</th>
            <th className="py-2">RATING</th>
            <th className="py-2">OPEN JOBS</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {companyData?.map((data) => (
            <tr key={data.id} className="border-b border-blue-400 px-2">
              <td className="py-2">{data.company}</td>
              <td className="py-2">{data.totalJobs}</td>
              <td className="py-2">{data.rating}</td>
              <td className="py-2">{data.available}</td>
              <td className=" py-2">
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

export default CompanyTable;
