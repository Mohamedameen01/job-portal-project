import React from "react";
import { useOutletContext } from "react-router-dom";
import { AdminPagesHeader, JobTable } from "../../components";

function Jobs() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mx-3">
      <AdminPagesHeader title={"all jobs"} />
      <JobTable />
    </div>
  );
}

export default Jobs;
