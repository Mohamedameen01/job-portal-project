import React from "react";

function JobRequirements({ title, data }) {
  return (
    <div className="my-4">
      <h1 className="text-lg font-semibold">{title}</h1>
      <ul className="mt-3">
        {data.map((item, index) => (
          <li
            className="text-[#00000080] text-md list-disc mx-3 py-2 "
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobRequirements;
