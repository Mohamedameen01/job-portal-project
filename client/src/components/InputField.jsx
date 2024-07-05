import React from "react";

function InputField({ label, type }) {
  return (
    <div className="grid gap-2 my-2">
      <label className="capitalize text-md font-medium">{label}</label>
      <input
        type={type}
        className="p-2 outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] rounded-lg"
      />
    </div>
  );
}

export default InputField;
