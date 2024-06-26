import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { LargeHeader, NormalHeader } from "../components/employee";

function UserLayout() {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  return (
    <div className="relative bg-[#f7f7f8]">
      <div className="fixed top-0 left-0 right-0 z-10">
        <LargeHeader />
        <NormalHeader value={toggleSideBar} setValue={setToggleSideBar} />
      </div>
      <div className={`relative mt-[82px] ${!toggleSideBar && "blur-md"} `}>
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
