import React from "react";

function SelectionOption({ label, choice, name, value, handleChildValue }) {
  const handleSelection = (e) => {
    const newValue = e.target.value;
    handleChildValue(name, newValue)
  }
  return (
    <select
      name="choice"
      className="w-full my-2 p-2 capitalize outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] rounded-lg"
      onChange={handleSelection}
    >
      <option className="text-md font-medium">{label}</option>
      {choice.map((text, index) => (
        <option className="capitalize" key={index} value={text === "yes" ? true : false}>
          {text}
        </option>
      ))}
    </select>
  );
}

export default SelectionOption;
