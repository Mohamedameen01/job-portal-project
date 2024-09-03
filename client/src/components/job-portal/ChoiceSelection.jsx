import React from 'react'

function ChoiceSelection({label, option}) {
  return (
    <div className="grid">
          <label className="text-sm font-semibold">{label}</label>
          <select className="ms-1 my-2 p-[21px] bg-gray-200 placeholder:text-slate-500 text-sm font-semibold tracking-wide rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500">
            <option value="" className="capitalize">
              {option}
            </option>
            <option value="" className="capitalize">
              yes
            </option>
            <option value="" className="capitalize">
              no
            </option>
          </select>
        </div>
  )
}

export default ChoiceSelection