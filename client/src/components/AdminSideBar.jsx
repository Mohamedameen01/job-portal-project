import React from "react";
import { adminNavLinks } from "../utils/Links";
import { NavLink } from "react-router-dom";

function AdminSideBar({ showSideBar }) {
  return (
    <div className={showSideBar ? "mx-5" : "mx-3"}>
      {adminNavLinks?.map((item) => (
        <NavLink
          className="flex items-center gap-3 py-2 text-lg transition ease-in-out duration-300 hover:scale-105 "
          to={item.path}
          key={item.text}
        >
          <span>{item.icon}</span>
          <p className={!showSideBar && "hidden"}>{item.text}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default AdminSideBar;
