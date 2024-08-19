import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

function StudyNavbar() {
  return (
    <div className="fixed inset-0 w-full h-20 bg-customBgColor z-50">
      <div className="max-w-[1480px] h-full mx-auto  px-[10px] sm:px-[40px] md:px-[50px] flex justify-between items-center">
        <Link to="/study-abroad" className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-black tracking-wider drop-shadow-2xl">
          Study Abroad
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/study-abroad/country" state={{title:"Country", currentPage:"country"}} className="hidden md:block p-2 text-[#20c997] font-bold tracking-wide hover:bg-[#20c997] hover:text-[#ffffff] hover:scale-105 rounded-md">Countries</Link>
          <NavLink className="p-2 rounded-md text-2xl  text-[#20c997] hover:bg-[#20c997] hover:text-[#ffffff] hover:scale-105">
            <CgProfile />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default StudyNavbar;
