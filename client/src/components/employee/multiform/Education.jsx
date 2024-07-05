import React from "react";

import MultiFormBtns from "./MultiFormBtns";
import InputField from "../../InputField";

function Education() {
  return (
    <div className=" lg:w-4/12 h-[78%] mx-auto my-2 bg-white p-4 shadow-lg">
      <h1 className="text-lg font-semibold">Your Education</h1>
      <InputField label={"degree"} type={"text"} />
      <InputField label={"institution"} type={"text"} />
      <InputField label={"field of study"} type={"text"} />
      <div className="grid grid-cols-2 gap-3">
        <InputField label={"start date"} type={"date"} />
        <InputField label={"end date"} type={"date"} />
      </div>
      <InputField label={"grade"} type={"text"} />
      <MultiFormBtns />
    </div>
  );
}

export default Education;
