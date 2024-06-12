import React from "react";
import { useOutletContext } from "react-router-dom";
import { JobTable } from "../../components";

function Jobs() {
  const { showSideBar } = useOutletContext();
  return (
    <div className={`mx-3 ${showSideBar ? "col-span-5" : "col-span-11"}`}>
      <JobTable />
    </div>
  );
}

export default Jobs;
