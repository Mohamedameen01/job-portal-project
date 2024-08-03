import React from "react";
import SelectionOption from "./SelectionOption";
import MultiFormBtns from "./MultiFormBtns";
import InputField from "../../../InputField";

function PersonalProject() {
  return (
    <div>
      <InputField label={"project name"} type={"text"} />
      <InputField label={"description"} type={"text"} />
      <div className="grid grid-cols-2 gap-3">
        <InputField label={"start date"} type={"date"} />
        <InputField label={"end date"} type={"date"} />
      </div>
      <SelectionOption label={"Currently Working"} choice={["yes", "no"]} />
      <InputField label={"skills"} type={"text"} />
      <MultiFormBtns />
    </div>
  );
}

export default PersonalProject;
