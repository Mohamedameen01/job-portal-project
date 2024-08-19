import React from "react";
import { IoMdQuote } from "react-icons/io";

function FeedbackBox({ name, status, img, note }) {
  return (
    <div
      className="group relative grid gap-5 p-5 text-white "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-50  group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-rose-400 group-hover:to-rose-500"></div>

      <div className="relative grid  gap-4 ">
        <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-red-500 to-orange-600 text-2xl rounded-full">
          <IoMdQuote />
        </div>
        <p className="text-sm lg:text-base  tracking-wide font-bold">
          {status}
        </p>
      </div>

      <div className="relative  text-lg lg:text-xl tracking-wider font-bold">
        "{note}"
      </div>

      <div className="relative flex items-center text-lg lg:text-xl tracking-wider font-black">
        {name}
      </div>
    </div>
  );
}

export default FeedbackBox;
