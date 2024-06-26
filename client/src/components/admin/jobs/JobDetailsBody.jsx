import React from "react";
import JobBoxInfo from "./JobBoxInfo";
import JobRequirements from "./JobRequirements";
import CompanyBoxInfo from "../companies/CompanyBoxInfo";
import { keyResponsibilties, skills } from "../../../utils/jobs-data";

function JobDetailsBody({ jobInfo }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      <div className="col-span-2">
        <h1 className="text-lg font-semibold ">Job Description</h1>
        <p className="mt-4 text-md text- text-[#00000080]">
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows. This role is ideal if you are looking to segue your career
          into the FinTech or Big Data arenas.
        </p>
        <JobRequirements
          title={"Key Responsiblities"}
          data={keyResponsibilties}
        />
        <JobRequirements title={"Skills & Experience"} data={skills} />
      </div>
      <div className="flex flex-col gap-3">
        <JobBoxInfo jobInfo={jobInfo} />
        <CompanyBoxInfo title={jobInfo?.company} />
      </div>
    </div>
  );
}

export default JobDetailsBody;
