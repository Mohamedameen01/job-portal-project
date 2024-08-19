import React from "react";

import StudyHead from "../child/StudyHead";
import FeedbackBox from "../child/FeedbackBox";
import { feedbackData } from "../../../utils/studyFeedback";

function StudyFeedback() {
  return (
    <div className="bg-black py-5">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[50px] ">
        <div className="grid gap-4 lg:flex justify-between">
          <div className="grid gap-3">
            <StudyHead text={"Popular"} color={"white"} />
            <h1 className="text-white text-2xl md:text-4xl font-black">
              Happy Student Feedback
            </h1>
          </div>
          <div className="flex items-center gap-3 text-white">
            <h3 className="text-5xl text-studyOrangeColor font-black ">4.8</h3>
            <p className="text-sm font-bold uppercase">
              Rating from <br /> our client
            </p>
          </div>
        </div>

        <div className=" my-5 grid lg:grid-cols-3">
          {feedbackData.map((item, ind) => (
            <FeedbackBox
              key={ind}
              name={item.name}
              img={item.img}
              note={item.note}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyFeedback;
