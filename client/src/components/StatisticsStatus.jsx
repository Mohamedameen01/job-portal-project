import React from "react";

function StatisticsStatus() {
  const obj = [
    {
      count: "250K+",
      title: "Jobs",
    },
    {
      count: "5K+",
      title: "Companies",
    },
    {
      count: "300K+",
      title: "Users",
    },
    {
      count: "15K+",
      title: "Subscribers",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {obj.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center bg-[#8B93FF] text-[#FFF7FC] px-5 py-3 rounded-lg hover:scale-105"
        >
          <div className="text-sm bg-blue-600 w-fit rounded-md p-2">
            {item.count}
          </div>
          <div className="text-lg">{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default StatisticsStatus;
