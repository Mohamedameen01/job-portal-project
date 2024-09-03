import React, { useEffect, useState } from "react";

function InputForms({ title, type, placeText, name, value, handleChildValue }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputValue = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    handleChildValue(name, newValue);
  };

  return (
    <div className="grid">
      <label className="text-sm font-semibold">{title}</label>
      <input
        type={type}
        placeholder={placeText}
        autoCorrect="false"
        className="ms-1 my-2 p-[21px] bg-gray-200 placeholder:text-slate-500 text-sm font-semibold tracking-wide rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500"
        value={inputValue}
        onChange={handleInputValue}
      />
    </div>
  );
}

export default InputForms;
