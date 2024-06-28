import React, { useState } from "react";
import {
  FindJobSection,
  JobSideBarSection,
  JobSideSection,
} from "../../components/employee/jobs";

function FindJobs() {
  const [toggleJobSection, setToggleJobSection] = useState(false);
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
