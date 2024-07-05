import React from "react";

function SelectionOption({ label, choice }) {
  return (
    <select
      name="choice"
      className="w-full my-2 p-2 capitalize outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] rounded-lg"
    >
      <option className="text-md font-medium">{label}</option>
      {choice.map((text, index) => (
        <option className="capitalize" key={index}>
          {text}
        </option>
      ))}
    </select>
  );
}

export default SelectionOption;
