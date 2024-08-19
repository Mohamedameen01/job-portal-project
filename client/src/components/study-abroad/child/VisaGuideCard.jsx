import React from "react";

import visaGuide1 from "/assets/images/study-abroad/study-guide.jpg";
import visaGuide2 from "/assets/images/study-abroad/study-guide2.jpg";

function VisaGuideCard() {
  const datas = [
    {
      title1: "Guiding Your Path with Our",
      title2: "Immigration Mission",
      para: "We're here to simplify immigration complexities, guiding you to success. Our mission is to unite families, open opportunities, and make your journey enriching. Your dreams are our focus on the path to a brighter future.",
      img: visaGuide1,
    },
    {
      title1: "Our Immigration",
      title2: "Service history",
      para: "Our history began with a vision to make the immigration process smoother and more accessible for individuals and families around the world. With a deep understanding of the challenges that accompany moving to a new country,",
      img: visaGuide2,
    },
  ];

  return (
    <div className="py-5">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[60px]">
        <div className="grid gap-[100px]">
          {datas.map((data, ind) => (
            <div key={ind} className="grid lg:grid-cols-2 gap-4">
              {ind === 1 ? (
                <img src={data.img} className="object-cover" />
              ) : (
                <img src={data.img} className="block lg:hidden object-cover" />
              )}

              <div className={`flex flex-col justify-center `}>
                <div className="grid gap-2">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl  font-black">
                    {data.title1}
                  </h2>
                  <h2 className="text-slate-500 text-2xl md:text-3xl lg:text-4xl   font-black">
                    {data.title2}
                  </h2>
                </div>
                <div className="w-5/6 mt-4 ">
                  <p className="text-xl text-slate-500 font-semibold tracking-wide">
                    {data.para}
                  </p>
                </div>
              </div>

              {ind !== 1 && (
                <div>
                  <img
                    src={data.img}
                    className="hidden lg:block float-right object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisaGuideCard;
