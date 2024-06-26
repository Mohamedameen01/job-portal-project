import React from "react";
import { Link, NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import SideBar from "./SideBar";

function NormalHeader({ value, setValue }) {
  return (
    <header className=" lg:hidden">
      <nav
        className={`h-20 mx-3  ${
          value ? "flex justify-between items-center" : "hidden"
        } `}
      >
        <div className="antialiased tracking-wide text-[#673ab7] text-xl font-semibold">
          <Link to={"/"}>JOB PORTAL</Link>
        </div>
        <div className="flex gap-2">
          <NavLink className="p-1 rounded-md text-xl font-bold " to={"/signin"}>
            <IoPersonOutline />
          </NavLink>
          <NavLink
            onClick={() => setValue(false)}
            className="p-1 rounded-md text-xl font-bold"
          >
            <CiMenuFries />
          </NavLink>
        </div>
      </nav>

      <SideBar value={value} setValue={setValue} />
    </header>
  );
}

export default NormalHeader;
