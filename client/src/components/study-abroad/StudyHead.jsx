import React from "react";
import { IoIosStar } from "react-icons/io";

function StudyHead({ text, position, color }) {
  return (
    <div
      className={`flex items-center ${position ? "justify-center" : ""} gap-3`}
    >
      <span className="text-rose-500 text-lg">
        <IoIosStar />
      </span>
      <h1
        className={`${
          color ? "text-white" : "text-black"
        } text-base xl:text-lg truncate font-semibold uppercase tracking-[2px] md:tracking-[5px]`}
      >
        {text}
      </h1>
      <span className="text-rose-500 text-lg">
        <IoIosStar />
      </span>
    </div>
  );
}

export default StudyHead;
