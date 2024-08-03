import React from "react";

import { DashboardSideBar } from "../../../../components/job-portal/employer/dashboard";
function ShortListed() {
  return (
    <div className="flex">
      <div className="w-3/12 bg-white">
        <DashboardSideBar />
      </div>
      <div className="w-8/12 ">Shortlistedഇ</div>
    </div>
  );
}

export default ShortListed;
