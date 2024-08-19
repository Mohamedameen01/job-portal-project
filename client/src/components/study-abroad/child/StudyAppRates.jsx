import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StudyAppRates() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const rates = [
    {
      count: 30,
      caption: "We Have Worked With Clients",
    },
    {
      count: 100,
      caption: "Successful Visa Process Rate",
    },
    {
      count: 1,
      caption: "Application Approval Processing Time",
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[50px] grid md:grid-cols-3">
        {rates.map((r, ind) => (
          <div
            key={ind}
            ref={ref}
            className="group grid gap-1 lg:gap-4 p-5 border-x border-b relative"
          >
            <h2 className="text-4xl lg:text-5xl xl:text-7xl ">
              <CountUp
                start={0}
                end={inView ? r.count : 0}
                duration={3}
              ></CountUp>
              {ind === 0 ? "K" : ind === 1 ? "%" : "DAY"}
            </h2>
            <span className="text-4xl text-[#fb4927] font-black">...</span>
            <p className="xl:w-[75%] text-lg xl:text-2xl font-black">
              {r.caption}
            </p>
            <span className="absolute bottom-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all ease-in-out duration-500"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyAppRates;
