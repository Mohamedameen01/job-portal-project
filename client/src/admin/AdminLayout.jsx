import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideBar } from "../components";

function AdminLayout() {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <AdminHeader
        handleSideBar={handleToggleSideBar}
        showSideBar={showSideBar}
      />
      <div
        className={`my-4 ${
          showSideBar ? "grid grid-cols-6" : "grid grid-cols-12"
        }`}
      >
        <AdminSideBar showSideBar={showSideBar} />
        <Outlet context={{ showSideBar }} />
      </div>
    </>
  );
}

export default AdminLayout;
