import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { employerDashboardLinks } from "../../../utils/Links";

function DashboardSideBar() {
  const { pathname } = useLocation();
  return (
    <div className="hidden fixed xl:block my-5 mx-4">
      <div className="flex flex-col gap-2">
        {employerDashboardLinks?.map((item, index) => (
          <NavLink
            className={`flex items-center gap-4 px-3 py-3 font-semibold  ${
              pathname === item.path &&
              " scale-105 translate-x-1 bg-[#ede7f6] text-[#673ab7] border-1 "
            } transition ease-in-out duration-300 hover:bg-[#ede7f6] hover:text-[#673ab7] hover:font-semibold rounded-md`}
            to={item.path}
            key={index}
          >
            <span className="text-lg">{item.icon}</span>
            <p className="capitalize antialiased text-sm lg:text-base">
              {item.text}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default DashboardSideBar;
