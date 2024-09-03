import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CiMenuFries } from "react-icons/ci";

import { useAuthContext } from "../../../context/AuthContext";
import { getUnreadUserMessages } from "../../../redux/chatSlice";
import { LargeHeader, NormalHeader } from "../../../components/job-portal/employee";
import { DashboardSideBar, SMDashboardSideBar } from "../../../components/job-portal/employee/dashboard";
import { Outlet } from "react-router-dom";
import { getBookMarkedJobs } from "../../../redux/employeeSlice";

function EmployeeDashboardLayout() {
  const [sideBar, setSideBar] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const { userId } = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnreadUserMessages(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(getBookMarkedJobs());
  }, [dispatch])

  return (
    <div className="relative bg-[#f7f7f8]">
      <div className="fixed top-0 left-0 right-0 z-20">
        <LargeHeader />
        <NormalHeader value={toggleSideBar} setValue={setToggleSideBar} />
      </div>

      <div className="mt-20 flex">
        <div className="xl:w-[20%]  bg-white overflow-y-scroll custom-scrollbar">
          <DashboardSideBar />
        </div>

        <div
          className={`overflow-y-scroll custom-scrollbar fixed transition-all ease-in-out duration-1000 ${
            sideBar ? "top-16 left-0 bottom-0 z-10 " : "-left-[115%]"
          } bg-white`}
        >
          <SMDashboardSideBar setValue={setSideBar} />
        </div>

        <div className="w-full xl:w-9/12 px-2 md:mx-5 xl:pt-14 mb-4 ">
          <button
            onClick={() => setSideBar(true)}
            className="xl:hidden ms-2 my-3 px-4 py-3 flex items-center gap-2 bg-blue-100 text-blue-500 font-semibold rounded-lg"
          >
            <CiMenuFries />
            <span className="text-sm">Menu</span>
          </button>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboardLayout;
