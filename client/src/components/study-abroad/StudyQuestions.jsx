import React from "react";
import StudyHead from "./StudyHead";
import QuestionBox from "./QuestionBox";

function StudyQuestions() {
  const questions = [
    "What is a student visa and why do I need one?",
    "What is the consultation process like?",
    "How much do your services cost?",
    "How do I get started with your services?",
    "What is your success rate with visa applications?",
  ];

  return (
    <div className="bg-customBgColor py-16">
      <div className="max-w-[1480px] mx-auto px-5">
        <div className="grid gap-3 md:flex justify-between ">
          <div className="grid gap-3">
            <StudyHead text={"Popular"} />
            <h1 className="text-2xl md:text-4xl font-black">Ask Question</h1>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <p className="text-xs lg:text-sm font-black uppercase">
              We have worldwide 20K Happy Student
            </p>
            <img
              src="https://evisa-react.xpressbuddy.com/static/media/user_avatar.a57d685ad452131ae74d.png"
              alt="users-image"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid my-5">
          {questions.map((que, ind) => (
            <QuestionBox
              key={ind}
              title={que}
              p1={
                "We offer comprehensive immigration and visa consulting services,"
              }
              p2={
                "including visa application assistance, document preparation,"
              }
              checks={[
                "Comprehensive Visa Assistance",
                "Visa Category Expertise",
                "Transparency and Communication",
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyQuestions;
