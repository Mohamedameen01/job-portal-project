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
          className="flex flex-col items-center bg-blue-100 px-5 py-3 rounded-lg hover:scale-105"
        >
          <div className="text-lg font-bold tracking-wider text-blue-500">{item.title}</div>
          <div className="text-base font-black text-blue-500 w-fit rounded-md p-2">
            {item.count}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatisticsStatus;
