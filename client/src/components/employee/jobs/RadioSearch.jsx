import React from "react";

function RadioSearch({ title, contents }) {
  return (
    <div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <ul className="mt-3 grid gap-2 items-center">
        {contents.map((item) => (
          <li key={item} className="w-fit">
            <label className="flex gap-3 items-center text-slate-600 cursor-pointer">
              <input
                type="radio"
                name="postedDate"
                value={item}
                className="w-4 h-4"
              />
              <span className="text-sm">{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioSearch;
