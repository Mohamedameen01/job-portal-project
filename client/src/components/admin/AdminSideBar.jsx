import React from "react";
import { adminNavLinks } from "../../utils/Links";
import { NavLink, useLocation } from "react-router-dom";

function AdminSideBar({ showSideBar }) {
  const { pathname } = useLocation();

  return (
    <div className={`fixed h-full ${
      showSideBar ? "mx-3 w-64" : "px-[4px] md:mx-[12px] w-11"
    } py-4 bg-white z-50 transition-all ease-in-out duration-500 overflow-hidden`}>
      <h1
        className={`${
          showSideBar ? "block" : "hidden"
        }  mb-4 subpixel-antialiased text-lg font-semibold text-[#000000]`}
      >
        Job Portal
      </h1>
      {adminNavLinks?.map((item, index) => (
        <NavLink
          key={index}
          className={`${!showSideBar && "w-fit"} ${
            pathname.match(item.path) &&
            "bg-[#ede7f6] text-[#673ab7] font-semibold"
          } flex items-center gap-3 my-2 px-2 py-2 text-md  hover:bg-[#ede7f6] hover:text-[#673ab7] font-semibold transition-colors duration-300  rounded-md`}
          to={item.path}
        >
          <span className="text-xl">{item.icon}</span>
          <p className={!showSideBar ? "hidden" : ""}>{item.text}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default AdminSideBar;
