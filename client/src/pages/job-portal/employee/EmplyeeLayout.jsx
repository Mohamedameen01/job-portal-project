import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  LargeHeader,
  NormalHeader,
} from "../../../components/job-portal/employee";
import { useDispatch } from "react-redux";
import { getBookMarkedJobs } from "../../../redux/employeeSlice";
import { useAuthContext } from "../../../context/AuthContext";
import { getUnreadUserMessages } from "../../../redux/chatSlice";

function EmployeeLayout() {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const [hide, setHide] = useState(true);
  const { pathname } = useLocation();
  const { userId } = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnreadUserMessages(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (pathname === "/employee/information-form") {
      setHide(false);
    }
  }, [pathname, setHide]);

  useEffect(() => {
    dispatch(getBookMarkedJobs());
  }, [dispatch])

  return (
    <div className=" bg-[#f7f7f8] antialiased">
      {hide && (
        <div className="fixed top-0 left-0 right-0 z-20">
          <LargeHeader />
          <NormalHeader value={toggleSideBar} setValue={setToggleSideBar} />
        </div>
      )}

      <div
        className={` ${hide ? "relative mt-[60px] " : ""} ${
          toggleSideBar ? "" : "blur-md"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default EmployeeLayout;
