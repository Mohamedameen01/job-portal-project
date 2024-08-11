import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { studyServicesCard } from "../../utils/studyServicesData";
import StudyHead from "./StudyHead";

function StudyServices() {
  return (
    <div className="bg-black text-white py-5">
      <div className="max-w-[1480px] mx-auto px-5 grid gap-4">
        <StudyHead text={"Services"} color={"white"} />

        <div className="grid gap-4 md:flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black tracking-wide">
            Easy Study Abroad
          </h1>
          <div className="group flex items-center gap-3 cursor-pointer relative">
            <p className="text-base xl:text-lg font-black ">More Services</p>
            <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center bg-white text-black text-sm lg:text-base  font-black rounded-full group-hover:translate-x-2">
              <FaArrowRight />
            </span>
            <span className="absolute -bottom-3 left-0 w-1/2 md:w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-600 transition-all ease-in-out duration-500 group-hover:w-0"></span>
          </div>
        </div>

        <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {studyServicesCard.map((item, ind) => (
            <div
              key={ind}
              className="group grid gap-4 p-5 border-b-2 border-b-[#212121] border-l-2 border-l-[#212121] hover:bg-[#212121]"
            >
              <img src={item.img} alt={item.title} />
              <h2 className="mt-1  text-2xl font-black">{item.title}</h2>
              <p>{item.caption}</p>
              <button className="mt-2 flex items-center gap-2">
                <p className="uppercase text-xs font-semibold">read more</p>
                <span className="text-xs text-white group-hover:translate-x-2">
                  <IoMdPlay />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyServices;
