import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className=" bg-[#f7f7f8] text-black shadow-lg shadow-slate-900 ">
      <nav className="max-w-[1280px] h-16 mx-auto flex flex-1 justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="text-xl font-semibold">
            <Link to={"/"}>JOB PORTAL</Link>
          </div>
          <div className="flex gap-3">
            <h2>Find Jobs</h2>
            <h2>Company</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <NavLink className="p-1 rounded-md text-xl bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-[#ffffff] hover:scale-105">
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

export default Header;
