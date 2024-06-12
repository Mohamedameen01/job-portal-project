import React from "react";
import { userData } from "../utils/table-datas";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

function UserTable() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-3">All Jobs</h1>
      <table className="w-full text-center border-2 border-cyan-600 rounded-lg">
        <thead className="uppercase bg-[#8B93FF] text-[#FFF7FC] text-sm">
          <tr>
            <th className="py-2">name</th>
            <th className="py-2">location</th>
            <th className="py-2">premium</th>
            <th className="py-2">applied</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => (
            <tr key={data.id} className="border-b border-blue-400 px-2">
              <td className="py-2">{data.name}</td>
              <td className="py-2">{data.address}</td>
              <td className="py-2 flex justify-center">
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
              <td className="py-2">{data.applied}</td>
              <td className="py-2">
                <Link className="bg-[#8B93FF] text-[#FFF7FC] px-3 py-1 rounded-lg">
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
