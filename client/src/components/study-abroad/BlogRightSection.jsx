import React from "react";

function BlogRightSection({ articles }) {
  return (
    <div className="col-span-2 lg:col-span-1 sm:pt-5 lg:pt-0">
      {articles.map((article, ind) => (
        <div key={ind} className="mb-12 grid  gap-4">
          <div className="flex items-start gap-3 ">
            <div className=" grid gap-1">
              <span className="w-1 h-1 bg-studyOrangeColor rounded-full"></span>
              <span className="w-1 h-1 bg-studyOrangeColor rounded-full"></span>
              <span className="w-1 h-1 bg-studyOrangeColor rounded-full"></span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="https://evisa-react.xpressbuddy.com/static/media/cat.10a2f9a2c266fd7ad1cbcf0d44316fef.svg"
                alt="icon-png"
                className="w-4 h-4 object-cover"
              />
              <h6 className="text-sm font-semibold tracking-wider">
                Study Visa
              </h6>
            </div>
          </div>

          <div className="px-4 flex flex-col gap-3">
            <div className="relative w-full">
              <h2 className="group relative text-lg xl:text-xl font-bold">
                <a href="" className="">
                  {article.title}
                </a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-linear origin-left"></span>
              </h2>
            </div>

            <div>
              <p className="pr-5 xl:text-lg">{article.note}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogRightSection;
