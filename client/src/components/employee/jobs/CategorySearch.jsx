import React, { useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { category } from "../../../utils/job-search";

function CategorySearch() {
  return (
    <div>
      <h1 className="font-semibold text-lg">Category</h1>
      <div className="w-fit mt-3 px-3 py-3 flex justify-between items-center gap-2 border-1 border-[#ecedf2] text-slate-950 bg-white rounded-md">
        <div className="mt-1">
          <MdOutlineWorkOutline />
        </div>

        <select
          name="category"
          className="text-slate-950 outline-none px-3 py-1 "
        >
          <option value="">Choose a category</option>
          {category.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CategorySearch;
