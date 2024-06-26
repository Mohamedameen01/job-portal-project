import React from "react";
import { useOutletContext } from "react-router-dom";
import { Pagination } from "../../components";
import { AdminPagesHeader } from "../../components/admin";
import { JobTable } from "../../components/admin/jobs";

function Jobs() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mr-2 px-5 py-3 bg-[#eef2f6]">
      <AdminPagesHeader title={"all jobs"} />
      <JobTable />
      <Pagination />
    </div>
  );
}

export default Jobs;
