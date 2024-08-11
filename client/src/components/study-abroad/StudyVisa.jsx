import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import StudyHead from "./StudyHead";

function StudyVisa() {
  return (
    <div className="bg-gradient-to-b from-black to-white pb-4">
      <div className="max-w-[1480px] mx-auto px-5 grid grid-cols-3">
        <div className="hidden lg:block">
          <img
            src="https://evisa-react.xpressbuddy.com/static/media/cta_img.d9e202eadad1d83a7c3a.jpg"
            alt="a-gril-with-canada-flag"
            className="h-full object-cover"
          />
        </div>
        <div className="bg-black text-white col-span-3 lg:col-span-2 py-5 flex flex-col justify-center ">
          <div className="w-3/4 mx-auto grid gap-4">
            <StudyHead text={"Free Visa"} />
            <h1 className="text-2xl lg:text-3xl xl:text-5xl font-black">
              Students and Experts Love Us 100% Success Rate
            </h1>
            <div className="group relative flex items-center gap-4 cursor-pointer">
              <h3 className="text-base xl:text-lg font-black tracking-wide">
                Apply Today
              </h3>
              <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center bg-white text-black text-sm lg:text-base  font-black rounded-full group-hover:translate-x-2">
                <FaArrowRight />
              </span>
              <span className="absolute -bottom-2 left-0 w-[58%] md:w-[30%] xl:w-[23%] h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all ease-in-out duration-500 group-hover:w-0 "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyVisa;
