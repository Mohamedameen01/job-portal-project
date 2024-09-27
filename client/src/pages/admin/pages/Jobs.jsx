import React from "react";
import { useOutletContext } from "react-router-dom";
import { Pagination } from "../../../components";
import { AdminPagesHeader } from "../../../components/admin";
import { JobTable } from "../../../components/admin/jobs";

function Jobs() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mx-3 p-4 bg-customBgColor">
      <AdminPagesHeader title={"all jobs"} />
      <JobTable />
      <Pagination />
    </div>
  );
}

export default Jobs;
