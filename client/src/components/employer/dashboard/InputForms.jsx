import React from "react";

function InputForms({ title, type, placeText }) {
  return (
    <div className="grid">
      <label className="text-sm font-semibold">{title}</label>
      <input
        type={type}
        placeholder={placeText}
        className="ms-1 my-2 p-[21px] bg-gray-200 placeholder:text-slate-500 text-sm font-semibold tracking-wide rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500"
      />
    </div>
  );
}

export default InputForms;
