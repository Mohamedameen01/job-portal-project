import React from "react";
import {
  FindJobSection,
  LargeSideSection,
} from "../../components/employee/jobs";

function FindJobs() {
  return (
    <div className="max-w-[1440px] mx-auto  px-7 grid lg:grid-cols-3">
      <LargeSideSection />
      <FindJobSection />
    </div>
  );
}

export default FindJobs;
