import React, { useEffect } from "react";

import JobSectionHeader from "./JobSectionHeader";
import JobListedSection from "./JobListedSection";
import { useDispatch, useSelector } from "react-redux";
import { resetEmployeeSuccess } from "../../../../redux/employeeSlice";

function FindJobSection({ toggleValue, setToggleValue }) {
  const { success } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
   
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(resetEmployeeSuccess())  
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div
      className={`h-screen col-span-3 py-5 ms-8 mr-2 ${
        toggleValue && "blur-md overflow-hidden"
      }`}
    >
      <JobSectionHeader setToggleValue={setToggleValue} />
      <JobListedSection />
    </div>
  );
}

export default FindJobSection;
