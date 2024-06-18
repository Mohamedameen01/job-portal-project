import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

function JobDetailsHeader({ jobInfo }) {
  return (
    <div className=" flex gap-3 p-5 capitalize bg-[#e3f2fd] rounded-lg">
      <div>
        <img
          alt="logo"
          loading="lazy"
          width={100}
          height={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEXJ0359-Zqi0CMO-Ri01GTJ8jgow2PfWIg&s"
        />
      </div>
      <div className="grid grid-rows-3 ">
        <h1 className="text-2xl font-semibold">{jobInfo?.job}</h1>
        <div className="flex gap-3 text-[#00000080]">
          <div className="flex items-center gap-1">
            <span>
              <IoBagHandleOutline />
            </span>
            <p>{jobInfo?.company}</p>
          </div>
          <div className="flex  items-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            <p>calicut,kerala</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <GoClock />
            </span>
            <p>{jobInfo?.createdAt}</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <FaMoneyBill1Wave />
            </span>
            <p>5.1LPA</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 subpixel-antialiased text-xs">
          <p className="bg-blue-300 text-blue-700 px-3 py-1 rounded-2xl">
            Full Time
          </p>
          <p className="bg-green-300 text-green-700 px-3 py-1 rounded-2xl">
            Private
          </p>
          <p className="bg-orange-200 text-orange-700 px-3 py-1 rounded-2xl">
            Urgent
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
