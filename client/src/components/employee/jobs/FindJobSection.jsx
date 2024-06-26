import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

function FindJobSection() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer (Android), Libraries",
      company: "segment",
      location: "calicut",
      time: "11 hours ago",
      salary: "35-40k",
      jobtype: ["fulltime", "Private", "Urgent"],
    },
    {
      id: 2,
      title: "Recruiting Cordinator",
      company: "figma",
      location: "kochi",
      time: "2 days ago",
      salary: "25-30k",
      jobtype: ["fulltime", "Urgent"],
    },
  ];
  return <div className="col-span-2 my-5"></div>;
}

export default FindJobSection;
