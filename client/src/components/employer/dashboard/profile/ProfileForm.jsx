import React from "react";

import { BsArrowUp } from "react-icons/bs";

function ProfileForm({ boxText }) {
  return (
    <div className="grid md:flex items-center md:gap-3">
      <div className="grid gap-2 my-4 ms-4 p-5 border-dashed border-2 border-slate-300 rounded-md cursor-pointer">
        <div className="mx-auto text-xl text-slate-500">
          <BsArrowUp />
        </div>
        <span className="mx-auto text-sm font-semibold">{boxText}</span>
      </div>
      <p className="text-sm">
        Max file size is 1MB And Suitable files are .jpg & .png
      </p>
    </div>
  );
}

export default ProfileForm;
