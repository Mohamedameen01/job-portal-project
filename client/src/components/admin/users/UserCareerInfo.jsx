import React from "react";

function UserCareerInfo({ title, data, color }) {
  return (
    <div className="mt-5">
      <h1 className="text-lg font-semibold">{title}</h1>
      {data.map((item) => (
        <div className="my-3 mx-4 capitalize" key={item.id}>
          <div className="flex flex-col ">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold">{item.row1}</h2>
              <p
                className={`bg-${color}-200 text-${color}-600 text-sm font-medium px-4 py-1 rounded-2xl`}
              >
                {item.year}
              </p>
            </div>
            <p className={`text-${color}-500 font-medium`}>{item.row2}</p>
          </div>
          <p className="my-4 text-[#00000080] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserCareerInfo;
