import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";

import upworklogo from "/assets/upworklogo.png";

function JobListedSection() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer (Android), Libraries",
      company: "segment",
      location: "calicut",
      posted: "11 hours ago",
      salary: "35-40k",
      jobtype: ["fulltime", "Private", "Urgent"],
    },
    {
      id: 2,
      title: "Software Engineer (Android), Libraries",
      company: "segment",
      location: "calicut",
      posted: "11 hours ago",
      salary: "35-40k",
      jobtype: ["fulltime", "Private", "Urgent"],
    },
    {
      id: 3,
      title: "Recruiting Cordinator",
      company: "figma",
      location: "kochi",
      posted: "2 days ago",
      salary: "25-30k",
      jobtype: ["fulltime", "Urgent"],
    },
    {
      id: 4,
      title: "Recruiting Cordinator",
      company: "figma",
      location: "kochi",
      posted: "2 days ago",
      salary: "25-30k",
      jobtype: ["fulltime", "Urgent"],
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-3 my-5">
      {jobs.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-7 gap-3 p-4 bg-white outline outline-1 outline-[#673ab7] rounded-lg"
        >
          <div className="mt-1 mx-auto">
            <img src={upworklogo} alt={item.company} width={40} />
          </div>
          <div className="col-span-5 flex flex-col  gap-2">
            <h2 className="text-md md:text-lg font-medium">{item.title}</h2>
            <div className="md:flex lg:grid xl:grid-cols-4 gap-2  ">
              <div className="text-sm capitalize text-slate-500 flex items-center gap-2">
                <IoBagHandleOutline />
                <p>{item.company}</p>
              </div>

              <div className="text-sm capitalize text-slate-500 flex items-center gap-2">
                <CiLocationOn />
                <p>{item.location}</p>
              </div>

              <div className="hidden md:flex items-center gap-2 xl:col-span-2 text-sm text-slate-500 ">
                <GoClock />
                <p>{item.posted}</p>
              </div>

              <div className="hidden md:flex items-center text-sm capitalize text-slate-500  gap-2">
                <FaMoneyBill1Wave />
                <p>{item.salary}</p>
              </div>
            </div>
            <div className="w-fit grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 items-center gap-2 xl:gap-4 mt-2">
              {item?.jobtype?.map((type, index) => (
                <p
                  key={index}
                  className="antialiased capitalize text-xs md:text-sm bg-white outline outline-1 outline-blue-500 px-2 py-[2px] rounded-lg"
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-1 mx-auto text-lg hover:text-blue-500 cursor-pointer">
            <IoBookmarkOutline />
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobListedSection;
