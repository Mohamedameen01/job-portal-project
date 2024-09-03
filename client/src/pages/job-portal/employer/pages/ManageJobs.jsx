import React, { useEffect } from "react";
import { JobManaging } from "../../../../components/job-portal/employer/dashboard";
import { useDispatch } from "react-redux";
import { getAllInfos, getPostedJobs } from "../../../../redux/employerSlice";

function ManageJobs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfos());
    dispatch(getPostedJobs());
  }, []);
  return (
    <>
      <JobManaging />
    </>
  );
}

export default ManageJobs;
