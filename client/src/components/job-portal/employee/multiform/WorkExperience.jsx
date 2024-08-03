import React from "react";

import MultiFormBtns from "./MultiFormBtns";
import SelectionOption from "./SelectionOption";
import InputField from "../../../InputField";

function WorkExperience() {
  return (
    <div className="lg:w-4/12 h-[78%] mx-auto my-3 bg-white p-4 shadow-lg">
      <h1 className="text-lg font-semibold">Your Experience</h1>
      <InputField label={"job title"} type={"text"} />
      <InputField label={"company"} type={"text"} />
      <div className="grid grid-cols-2 gap-3">
        <InputField label={"start date"} type={"date"} />
        <InputField label={"end date"} type={"date"} />
      </div>
      <SelectionOption label={"currently working"} choice={["yes", "no"]} />
      <InputField label={"acheivements"} type={"text"} />
      <MultiFormBtns />
    </div>
  );
}

export default WorkExperience;
