import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideBar } from "../../components/admin";

function AdminLayout() {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-10">
        <AdminHeader
          handleSideBar={handleToggleSideBar}
          showSideBar={showSideBar}
        />
      </div>
      <div className="max-w-[1440px] mx-auto mt-16">
        <div className={`${showSideBar ? "w-3/12" : "w-1/12"}`}>
          <AdminSideBar showSideBar={showSideBar} />
        </div>
        <div
          className={`py-4 ${showSideBar ? "w-9/12" : "w-11/12"} float-right`}
        >
          <Outlet context={{ showSideBar }} />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
