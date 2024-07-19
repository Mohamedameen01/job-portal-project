import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import maleprofile from "/assets/maleprofile.jpg";
import femaleprofile from "/assets/femaleprofile.jpg";

function SideListBox() {
  const users = [
    {
      name: "Darlene Robertson",
      position: "Head of Development",
    },
    {
      name: "Jane Cooper",
      position: "Product Designer",
      pending: 2,
    },
    {
      name: "Carlos Vamos",
      position: "UI Designer",
      pending: 2,
    },
    {
      name: "Mathew Thomas",
      position: "Softwear Engineer",
    },
    {
      name: "Leanardo Dicapri",
      position: "Softwear Engineer",
    },
  ];
  return (
    <div className="bg-white p-5 grid gap-4">
      <div className="bg-customBgColor p-3 flex items-center gap-3 border rounded-lg">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Search"
          className="bg-customBgColor placeholder:text-sm placeholder:text-black focus:outline-none"
        />
      </div>
      <div className="grid gap-5">
        {users.map((item, index) => (
          <div key={index} className="grid grid-cols-4 items-center gap-2">
            <img
              src={`${index % 2 === 0 ? maleprofile : femaleprofile}`}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="col-span-2">
              <h2 className="text-sm font-semibold">{item.name}</h2>
              <p className="text-xs">{item.position}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-sm">
                35 <span className="text-xs">mins</span>
              </p>
              {item.pending && (
                <p className="min-w-5 min-h-5 flex justify-center items-center text-xs font-semibold bg-customViolet text-white rounded-full">
                  {item.pending}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideListBox;
