import React from "react";

function FormButton({ text }) {
  return (
    <button className="w-fit mt-4 px-16 py-3 bg-customViolet  text-white capitalize hover:bg-violet-900  rounded-md">
      {text}
    </button>
  );
}

export default FormButton;
