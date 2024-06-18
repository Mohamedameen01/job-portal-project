import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiSandsOfTime } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";

function JobBoxInfo({ jobInfo }) {
  return (
    <div className="h-fit bg-[#e3f2fd] p-4">
      <h1 className="text-lg font-medium subpixel-antialiased">Job Overview</h1>
      <div className="my-4 ms-2 flex items-start gap-3 ">
        <div className="mt-1 text-lg text-blue-600">
          <SlCalender />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Date Posted:</h3>
          <p className="text-sm">Posted {jobInfo?.createdAt}</p>
        </div>
      </div>

      <div className="my-4 ms-2 flex items-start gap-3 ">
        <div className="mt-1 text-lg text-blue-600">
          <GiSandsOfTime />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Expiration Date:</h3>
          <p className="text-sm">April 06, 2021</p>
        </div>
      </div>

      <div className="my-4 ms-2 flex items-start gap-3 ">
        <div className="mt-1 text-lg text-blue-600">
          <CiLocationOn />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Location:</h3>
          <p className="text-sm">Calicut, Kerala</p>
        </div>
      </div>

      <div className="my-4 ms-2 flex items-start gap-3 ">
        <div className="mt-1 text-lg text-blue-600">
          <IoPersonOutline />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Job Title:</h3>
          <p className="text-sm">Posted {jobInfo?.job}</p>
        </div>
      </div>

      <div className="my-4 ms-2 flex items-start gap-3 ">
        <div className="mt-1 text-lg text-blue-600">
          <MdOutlineAccessTime />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Hours:</h3>
          <p className="text-sm">50h / week</p>
        </div>
      </div>

      <div className="my-4 ms-2 flex items-start gap-3 ">
        <div className="mt-1 text-lg text-blue-600">
          <FaMoneyBill1Wave />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Salary:</h3>
          <p className="text-sm">35k-45k</p>
        </div>
      </div>
    </div>
  );
}

export default JobBoxInfo;
