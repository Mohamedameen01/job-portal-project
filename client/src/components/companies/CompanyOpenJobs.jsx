import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaMoneyBill1Wave } from "react-icons/fa6";

function CompanyOpenJobs({ data }) {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-medium">Available Jobs</h1>
      <div className="grid my-3">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-[#f7f7f8] grid grid-rows-3 gap-2  my-2 p-4 rounded-md hover:shadow-md  "
          >
            <h2 className="text-lg font-medium">{item.position}</h2>
            <div className="flex gap-3 text-[#00000080] text-sm">
              <div className="flex items-center gap-1">
                <span>
                  <IoBagHandleOutline />
                </span>
                <p>{item.company}</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <CiLocationOn />
                </span>
                <p>{item.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <GoClock />
                </span>
                <p>{item.createdAt}</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <FaMoneyBill1Wave />
                </span>
                <p>{item.salary}LPA</p>
              </div>
            </div>
            <p className="w-fit px-3 py-1 bg-[#e3f2fd] text-center text-blue-600 text-sm rounded-2xl">
              {item.jobType}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyOpenJobs;
