import React from "react";

function BlogLeftSection() {
  return (
    <div className="col-span-2 ">
      <div className="lg:w-10/12  overflow-hidden rounded-lg ">
        <img
          src="https://evisa-react.xpressbuddy.com/static/media/img_04.9916a0bbf61e55aecd11.jpg"
          alt="graduated-girl"
          className="w-full object-cover drop-shadow-sm transition-all ease-in-out duration-500 hover:scale-105 hover:drop-shadow-xl  "
        />
      </div>

      <div className="py-4 flex gap-3">
        <div className="h-fit w-fit grid gap-1">
          <span className="w-1 h-1 bg-studyOrangeColor rounded-full"></span>
          <span className="w-1 h-1 bg-studyOrangeColor rounded-full"></span>
          <span className="w-1 h-1 bg-studyOrangeColor rounded-full"></span>
        </div>

        <ul className="flex flex-wrap gap-3 md:gap-5">
          <li className="flex items-center gap-2">
            <img
              src="https://evisa-react.xpressbuddy.com/static/media/cat.10a2f9a2c266fd7ad1cbcf0d44316fef.svg"
              alt="icon-png"
            />
            <h6 className="text-sm font-semibold tracking-wider capitalize">
              consulting
            </h6>
          </li>
          <li className="flex items-center gap-2">
            <img
              src="https://evisa-react.xpressbuddy.com/static/media/calendar2.b19d032a36bf7a844f293635313fa6b6.svg"
              alt="icon-png"
            />
            <h6 className="text-sm font-semibold tracking-wider capitalize">
              october 15, 2024
            </h6>
          </li>
          <li className="flex items-center gap-2">
            <img
              src="https://evisa-react.xpressbuddy.com/static/media/comment.7d288ce8d9625017a67429a7a49e695e.svg"
              alt="icon-png"
            />
            <h6 className="text-sm font-semibold tracking-wider capitalize">
              95
            </h6>
          </li>
        </ul>
      </div>

      <div className="grid gap-3 px-4">
        <h2 className="group relative lg:w-4/5 text-2xl xl:text-4xl font-bold overflow-hidden">
          <a href="" className="">
            10 Reasons why you should make a physical portfolio
          </a>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all ease-linear duration-500 origin-left"></span>
        </h2>
        <p className="lg:w-4/5  xl:text-lg">
          Student visa consulting agencies are equipped with professionals who
          specialize in the intricacies of visa applications.
        </p>
      </div>
    </div>
  );
}

export default BlogLeftSection;
