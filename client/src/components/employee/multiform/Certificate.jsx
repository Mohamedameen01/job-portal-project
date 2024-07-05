import React from "react";
import MultiFormBtns from "./MultiFormBtns";
import InputField from "../../InputField";

function Certificate() {
  return (
    <div>
      <InputField label={"certificate name"} type={"text"} />
      <InputField label={"issued organization"} type={"text"} />
      <div className="grid grid-cols-2 gap-3">
        <InputField label={"start date"} type={"date"} />
        <InputField label={"end date"} type={"date"} />
      </div>
      <InputField label={"description"} type={"text"} />
      <MultiFormBtns />
    </div>
  );
}

export default Certificate;
