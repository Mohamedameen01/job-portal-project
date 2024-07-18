import React, { useEffect, useState } from "react";
import { LargeHeader, NormalHeader } from "../components/employer";
import { Outlet, useLocation } from "react-router-dom";

function EmployerLayout() {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const [hide, setHide] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/employer/information-form") {
      setHide(false);
    }
  }, []);

  return (
    <div className="relative  bg-customBgColor">
      {hide && (
        <div className="fixed top-0 left-0 right-0 z-20">
          <LargeHeader />
          <NormalHeader value={toggleSideBar} setValue={setToggleSideBar} />
        </div>
      )}
      <div
        className={`${hide ? "relative mt-[60px] " : ""} ${
          !toggleSideBar && "blur-md"
        } `}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default EmployerLayout;
