import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import StudyHead from "../child/StudyHead";

function StudyAboutUs() {
  const headData = {title: "About Visa", currentPage: "About"};

  return (
    <div className="bg-white py-5 ">
      <div className="max-w-[1480px] px-[10px] sm:px-[40px] md:px-[50px] mx-auto grid gap-4">
        <StudyHead text={"About us"} />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide">
          Since 1998 - Unparalleled Comprehensive <br /> Student Visa Guide
        </h1>
        <p className="w-4/5 lg:text-lg tracking-wide">
          Expert advice, step-by-step instructions, and insider tips to help you
          navigate the student visa application process with confidence and
          success Simplified Steps, Proven Strategies, Unwavering Support!"
        </p>
        <div className="w-full mt-3 grid items-center lg:grid-cols-4 gap-3">
          <div className="w-fit h-fit px-4 py-3 flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 transition-all duration-500 ease-in-out rounded-full z-20 cursor-pointer">
            <Link
              to="/study-abroad/about-visa" state= {headData} 
              className="text-white text-sm lg:text-lg font-semibold tracking-wide"
            >
              E.Visa History
            </Link>
            <span className="w-5 h-5 lg:w-6 lg:h-6 flex items-center bg-white text-amber-600 text-lg rounded-full">
              <BsArrowRight />
            </span>
          </div>

          <div className="lg:col-span-2 h-fit grid gap-4">
            <p className="lg:text-lg">
              Unlock Your Educational Journey Abroad: The Essential Student Visa
              GuideYour Gateway to Global Learning
            </p>
            <div className="flex items-center gap-3 cursor-pointer">
              <p className="peer text-lg font-semibold">
                Explore More Insight About us
              </p>
              <div className="text-lg text-black transition-transform peer-hover:translate-x-2 hover:translate-x-2">
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div>
            <img
              src="	https://evisa-react.xpressbuddy.com/static/media/about_img2.33adb3daf4c60c236741.png"
              alt="graduation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyAboutUs;
