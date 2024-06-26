import React from "react";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import { userData } from "../../../utils/table-datas";

function UserTable() {
  console.log(userData);
  return (
    <div>
      <table className="bg-[#ffffff] w-full  rounded-lg">
        <thead className=" uppercase text-[#000000] border text-sm font-semibold">
          <tr>
            <td className="py-3 px-3">#</td>
            <td className="text-start py-3 px-3">User Profile</td>
            {/* <td className="py-3">name</td> */}
            <td className="py-3 px-3">location</td>
            <td className="py-3 px-3 text-center">premium</td>
            <td className="py-3 px-3 text-center">applied</td>
            <td className="py-3 px-3"></td>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={data.id} className="border-b  px-2 capitalize text-sm">
              <td className="py-3 px-3">{index + 1}</td>
              <td scope="row" className="flex items-center gap-4 py-3 px-3">
                <img
                  className="w-8 h-8 rounded-full object-cover "
                  src={data.photo}
                  alt="user-profile"
                />
                <p className="text-base">{data.name}</p>
              </td>
              <td className="py-3 px-3">{data.address}</td>
              <td className="py-3 px-3 flex justify-center">
                {data.premium ? (
                  <span className="text-green-500">
                    <TiTick />
                  </span>
                ) : (
                  <span className="text-red-500">
                    <IoMdClose />
                  </span>
                )}
              </td>
              <td className="py-3 px-3 text-center">{data.applied}</td>
              <td className="py-3 px-3">
                <Link
                  to={`/administrator/users/${data.id}`}
                  className="bg-[#8B93FF] text-[#FFF7FC] px-3 py-1 rounded-lg"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
