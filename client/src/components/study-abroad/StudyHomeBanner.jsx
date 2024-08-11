import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

function StudyHomeBanner() {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-full  bg-gradient-to-r from-red-400 to-orange-900 shadow-xl shadow-orange-300">
      <div className="h-full relative grid justify-center items-center">
        <h1 className="w-full absolute top-10 md:top-28  flex justify-center items-center gap-3 text-white text-base xl:text-lg font-semibold md:tracking-[10px] uppercase z-20">
          <span className="text-blue-500 text-lg">
            <IoIosStar />
          </span>
          Welcome to visa advicer
          <span className="text-blue-500 text-lg">
            <IoIosStar />
          </span>
        </h1>

        <div className="">
          <img
            src="https://evisa-react.xpressbuddy.com/static/media/img_01.2698d56da81dec8fa473.png"
            alt="banner-img"
            className=" w-4/5 mx-auto drop-shadow-2xl z-10"
          />
        </div>

        <div className="w-full absolute flex justify-center">
          <h1
            className={`absolute -top-10 md:-top-20 transform ${
              render ? "-translate-x-full" : "-translate-x-[1500px]"
            } text-white font-black text-2xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide transition-all ease-in-out duration-700`}
          >
            Expert
          </h1>
          <h1
            className={`absolute -top-10 md:-top-20 transform ${
              render ? "translate-x-3/4" : "translate-x-[1500px]"
            }   text-white font-black text-2xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide transition-all ease-in-out duration-700`}
          >
            student
          </h1>

          <h1 className="absolute top-10  text-white b font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl  uppercase tracking-wide z-20 drop-shadow-2xl ">
            visa help
          </h1>

          <div
            className={`px-3 lg:px-4 py-2 lg:py-3 absolute ${
              render ? "top-24 md:top-48" : "top-60"
            } md:flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 rounded-full z-20 cursor-pointer transition-all ease-in-out duration-300`}
          >
            <button className="text-nowrap text-white text-sm lg:text-lg font-semibold tracking-wide">
              Book Appointment Today
            </button>
            <span className="w-5 h-5 md:w-6 md:h-6 mx-auto flex items-center bg-white md:text-lg  rounded-full">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyHomeBanner;
