import React from "react";

import { CiLocationOn } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

import CommentButtons from "./CommentButtons";

function CandidateCards({ data, maleImg, femaleImg }) {
  return data.map((item) => (
    <div
      key={item.id}
      className="md:flex gap-3 items-start my-2 ps-3 py-4 border rounded-md shadow-md"
    >
      <img
        src={item.id % 2 === 0 ? maleImg : femaleImg}
        alt={item.name}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="grid gap-1">
        <h3 className="capitalize font-semibold  pt-1">{item.name}</h3>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <p className="capitalize text-xs md:text-sm text-blue-500 font-semibold">
            Product Designer
          </p>

          <div className="flex items-center gap-1 text-xs md:text-sm text-slate-500 ">
            <CiLocationOn />

            <p className="capitalize text-xs md:text-sm text-slate-500">
              {item.address}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <p className="bg-[#f7f7f8] rounded-3xl px-3 py-2 text-sm">App</p>
          <p className="bg-[#f7f7f8] rounded-3xl px-3 py-2 text-sm">Design</p>
          <p className="bg-[#f7f7f8] rounded-3xl px-3 py-2 text-sm">Digital</p>
        </div>

        <div className="flex items-center gap-3 pt-3">
          <CommentButtons icon={<IoEyeOutline />} text={"View Application"} />
          <CommentButtons
            icon={<IoCheckmarkOutline />}
            text={"Approve Application"}
          />
          <CommentButtons
            icon={<IoCloseOutline />}
            text={"Reject Application"}
          />
          <CommentButtons
            icon={<MdOutlineDeleteOutline />}
            text={"Delete Application"}
          />
        </div>
      </div>
    </div>
  ));
}

export default CandidateCards;
