import React from "react";
import StudyHead from "./StudyHead";
import BlogLeftSection from "./BlogLeftSection";
import BlogRightSection from "./BlogRightSection";

function StudyBlog() {
  const articles = [
    {
      title: "Student Visa Consulting and the Road to Higher Education..",
      note: "The realm of visa applications is a and ever-changing landscape...",
    },
    {
      title: "How Student Visa Consulting Lights the Way..",
      note: "Embarking on a journey to study abroad is an aspiration many students..",
    },
    {
      title: "How Student Visa Consulting Transforms the Journey..",
      note: "Student visa consultants bring a wealth of knowledge to the table..",
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="max-w-[1480px] mx-auto px-5">
        <div className="my-3 grid items-center gap-4">
          <StudyHead text={"latest news"} position={"center"} />
          <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl font-black tracking-wide">
            Latest Blog & Article
          </h1>
        </div>
        <div className="my-5 grid lg:grid-cols-3 gap-3">
          <BlogLeftSection />
          <BlogRightSection articles={articles} />
        </div>
      </div>
    </div>
  );
}

export default StudyBlog;
