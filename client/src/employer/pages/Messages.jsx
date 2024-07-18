import React from "react";

import { DashboardSideBar } from "../../components/employer/dashboard";
function Messages() {
  return (
    <div className="flex">
      <div className="w-3/12 bg-white">
        <DashboardSideBar />
      </div>
      <div className="w-8/12 ">Messages</div>
    </div>
  );
}

export default Messages;
