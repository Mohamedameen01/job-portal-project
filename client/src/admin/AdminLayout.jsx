import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideBar } from "../components/admin";

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
      <div className="relative mt-16">
        <div
          className={`fixed h-full py-4  transition-all duration-300 ${
            showSideBar ? "w-1/6 " : "w-1/12"
          }`}
        >
          <AdminSideBar showSideBar={showSideBar} />
        </div>
        <div
          className={`py-4 ml-auto transition-all duration-300 ${
            showSideBar ? "w-5/6" : "w-11/12"
          }`}
        >
          <Outlet context={{ showSideBar }} />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
