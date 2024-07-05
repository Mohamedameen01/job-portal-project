import React from "react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoSaveOutline } from "react-icons/io5";

import {
  setNextPageIndex,
  setPrevPageIndex,
} from "../../../redux/employeeInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MultiFormBtns() {
  const { pageIndex } = useSelector((state) => state.employeeInfo);
  const dispatch = useDispatch();

  const handlePrevBtn = () => {
    dispatch(setPrevPageIndex(pageIndex - 1));
  };
  const handleNextBtn = () => {
    dispatch(setNextPageIndex(pageIndex + 1));
  };
  return (
    <div className="grid gap-3">
      <div className="flex justify-end gap-2 mt-2">
        <button className="h-10 w-10 flex justify-center items-center text-xl bg-sky-100 text-red-500 font-medium  rounded-full ">
          <AiOutlineDelete />
        </button>
        <button className="h-10 w-10 flex justify-center items-center text-xl bg-sky-100 text-[#673ab7] font-medium  rounded-full ">
          <GrAdd />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <button
            onClick={handlePrevBtn}
            className={`${
              pageIndex === 1 ? "hidden" : "flex"
            } h-10 w-10 justify-center items-center text-xl bg-[#673ab7] text-white font-medium rounded-full`}
          >
            <GrLinkPrevious />
          </button>
        </div>
        <div>
          <button
            onClick={handleNextBtn}
            className={`${
              pageIndex === 4 ? "hidden" : "flex"
            } h-10 w-10 justify-center items-center text-xl bg-[#673ab7] text-white font-medium rounded-full`}
          >
            <GrLinkNext />
          </button>
          <Link
            to={"/employee"}
            className={`${
              pageIndex === 4 ? "flex" : "hidden"
            } capitalize h-10 w-10 justify-center items-center text-xl bg-[#673ab7] text-white font-medium rounded-full`}
          >
            <IoSaveOutline />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MultiFormBtns;
