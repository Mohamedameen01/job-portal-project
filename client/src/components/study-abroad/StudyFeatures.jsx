import React from "react";

import { studyFeaturesList } from "../../utils/StudyFeatursData";

function StudyFeatures() {
  return (
    <div className="bg-white border-b-2 border-gray-300 ">
      <div className="max-w-[1480px] mx-auto px-5 py-5 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {studyFeaturesList.map((item, ind) => (
          <div key={ind} className="flex items-center gap-3">
            <img
              src={item.img}
              alt={item.title}
              className="w-10 h-10 p-2 bg-orange-200 rounded-full"
            />
            <h3 className="md:text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyFeatures;
