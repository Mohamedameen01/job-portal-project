import React from "react";
import { userData } from "../../utils/table-datas";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

function UserTable() {
  return (
    <div>
      <table className="bg-[#ffffff] w-full text-center rounded-lg">
        <thead className="uppercase text-[#000000] border text-sm font-semibold">
          <tr>
            <td className="py-3">#</td>
            <td className="py-3">name</td>
            <td className="py-3">location</td>
            <td className="py-3">premium</td>
            <td className="py-3">applied</td>
            <td className="py-3"></td>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={data.id} className="border-b  px-2 capitalize text-sm">
              <td className="py-3">{index + 1}</td>
              <td className="py-3">{data.name}</td>
              <td className="py-3">{data.address}</td>
              <td className="py-3 flex justify-center">
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
              <td className="py-3">{data.applied}</td>
              <td className="py-3">
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
