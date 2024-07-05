import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiBuildingOffice } from "react-icons/pi";
import { Link } from "react-router-dom";

function RoleSelection() {
  return (
    <div className="w-full h-full grid md:grid-cols-2 gap-3">
      <div className="flex justify-center md:justify-end items-end md:items-center ">
        <Link
          to={"/employee/information-form"}
          className="grid gap-1 md:gap-3 p-5  rounded-lg shadow-lg transition-all ease-in-out duration-700  bg-[#ffffff] text-[#673ab7]  hover:bg-[#673ab7] hover:text-white hover:scale-105  cursor-pointer"
        >
          <div className="mx-auto text-6xl md:text-9xl">
            <BsPersonWorkspace />
          </div>
          <p className="antialiased text-center text-md md:text-lg font-medium ">
            Employee
          </p>
        </Link>
      </div>
      <Link
        to={"/employer/information-form"}
        className="flex justify-center md:justify-start items-start md:items-center"
      >
        <div className="grid gap-1 md:gap-3 p-5  rounded-lg shadow-lg transition-all ease-in-out duration-700  bg-[#ffffff] text-[#673ab7]  hover:bg-[#673ab7] hover:text-white hover:scale-105  cursor-pointer">
          <div className="mx-auto text-6xl md:text-9xl">
            <PiBuildingOffice />
          </div>
          <p className="antialiased text-center text-md md:text-lg font-medium ">
            Employer
          </p>
        </div>
      </Link>
    </div>
  );
}

export default RoleSelection;
