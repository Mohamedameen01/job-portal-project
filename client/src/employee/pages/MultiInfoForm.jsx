import React, { useState } from "react";
import {
  MultiFormBody,
  MultiFormHeader,
} from "../../components/employee/multiform";

function MultiInfoForm() {
  return (
    <div className="max-w-[1280px] mx-auto ">
      <MultiFormHeader />
      <MultiFormBody />
    </div>
  );
}

export default MultiInfoForm;
