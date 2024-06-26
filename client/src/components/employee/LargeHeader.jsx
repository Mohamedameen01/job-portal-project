import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";

function LargeHeader() {
  return (
    <header className="hidden lg:block bg-[#f7f7f8] text-black shadow-md">
      <nav className="max-w-[1440px] h-20 mx-auto px-7 flex flex-1 justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="antialiased tracking-wide text-xl font-bold">
            <Link to={"/"}>JOB PORTAL</Link>
          </div>
          <div className="flex gap-3">
            <Link
              className="hover:scale-105 hover:text-[#673ab7]"
              to={"/find-jobs"}
            >
              Find Jobs
            </Link>
            <Link
              className="hover:scale-105 hover:text-[#673ab7]"
              to={"/companies"}
            >
              Company
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <NavLink
            to={"/saved-jobs"}
            className="p-1 rounded-md text-xl bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-[#ffffff] hover:scale-105"
          >
            <IoBookmarkOutline />
          </NavLink>
          <NavLink
            to={"/notifications"}
            className="p-1 rounded-md text-xl bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-[#ffffff] hover:scale-105"
          >
            <IoMdNotificationsOutline />
          </NavLink>
          <NavLink className="px-3 py-[2px] border-1 border-slate-500 rounded-md tracking-wide hover:bg-[#673ab7] hover:text-[#ffffff] hover:scale-105">
            Employer
          </NavLink>

          <NavLink
            className="p-1 rounded-md text-xl bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-[#ffffff] hover:scale-105"
            to={"/signin"}
          >
            <CgProfile />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default LargeHeader;
