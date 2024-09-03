import React, { useEffect, useState } from "react";
import {
  FindJobSection,
  JobSideBarSection,
  JobSideSection,
} from "../../../../components/job-portal/employee/jobs";
import { useDispatch } from "react-redux";
import { getAllJobs } from "../../../../redux/employeeSlice";
import { useLocation } from "react-router-dom";

function FindJobs() {
  const [toggleJobSection, setToggleJobSection] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state);
  
  useEffect(() => {
    if (!state) {
      dispatch(getAllJobs());
    }
  }, [dispatch, state]);
  return (
    <div className="max-w-[1440px] mx-auto px-7 grid lg:grid-cols-4">
      <JobSideSection />

      <JobSideBarSection
        toggleValue={toggleJobSection}
        setToggleValue={setToggleJobSection}
      />
      <FindJobSection
        toggleValue={toggleJobSection}
        setToggleValue={setToggleJobSection}
      />
    </div>
  );
}

export default FindJobs;
