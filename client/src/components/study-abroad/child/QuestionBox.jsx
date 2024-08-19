import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";

function QuestionBox({ title, p1, p2, checks }) {
  const [isMinus, setIsMinus] = useState(false);
  return (
    <div className="border-2 shadow">
      <div className="bg-white px-4 py-[32px] flex justify-between items-center gap-3  shadow-md">
        <h1 className="text-base md:text-xl xl:text-2xl font-black">{title}</h1>
        <button
          className=" w-8 h-8 flex justify-center items-center text-xl transition-all ease-in-out duration-500 hover:bg-customBgColor hover:scale-125 rounded-full "
          onClick={() => setIsMinus(!isMinus)}
        >
          {isMinus ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      <div className={`${isMinus ? "grid gap-4 px-4 py-[32px]" : "hidden"}`}>
        <p className="md:text-lg">
          {p1} <br /> {p2}
        </p>
        <ul>
          {checks.map((check, ind) => (
            <li key={ind} className="flex items-center gap-2 md:text-lg">
              <span>
                <IoCheckmarkOutline />
              </span>
              <p>{check}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionBox;
