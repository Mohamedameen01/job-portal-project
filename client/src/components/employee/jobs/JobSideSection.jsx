import React from "react";

import {
  TextSearch,
  OptionSearch,
  SwitchSearch,
  RadioSearch,
} from "./index.js";

import {
  categoryData,
  experienceData,
  jobTypeData,
  postedDateData,
} from "../../../utils/job-search.js";

function JobSideSection() {
  return (
    <div className="my-5 hidden lg:grid gap-4 ">
      <TextSearch firsttitle={"Search by keywords"} secondtitle={"Location"} />
      <OptionSearch title={"Category"} contents={categoryData} />
      <SwitchSearch title={"Job Type"} contents={jobTypeData} />
      <RadioSearch title={"Date Posted"} contents={postedDateData} />
      <SwitchSearch title={"Experience"} contents={experienceData} />
    </div>
  );
}

export default JobSideSection;
