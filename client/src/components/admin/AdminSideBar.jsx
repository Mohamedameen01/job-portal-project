import React from "react";
import { adminNavLinks } from "../../utils/Links";
import { NavLink, useLocation } from "react-router-dom";

function AdminSideBar({ showSideBar }) {
  const { pathname } = useLocation();

  return (
    <div className={showSideBar ? "mx-5" : "mx-3"}>
      <h1
        className={`${
          showSideBar ? "block" : "hidden"
        } -ms-3 mb-4 subpixel-antialiased font-medium text-[#000000]`}
      >
        Dashboard
      </h1>
      {adminNavLinks?.map((item, index) => (
        <NavLink
          className={`${!showSideBar && "w-fit"} ${
            pathname.match(item.path) &&
            "bg-[#ede7f6] text-[#673ab7] font-medium"
          } flex items-center gap-3 my-2 px-2 py-2 text-md transition ease-in-out duration-300 hover:bg-[#ede7f6] hover:text-[#673ab7] hover:font-medium rounded-md`}
          to={item.path}
          key={item.text}
        >
          <span className="text-xl">{item.icon}</span>
          <p className={!showSideBar ? "hidden" : ""}>{item.text}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default AdminSideBar;
