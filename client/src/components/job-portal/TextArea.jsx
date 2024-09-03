import React from 'react'

function TextArea({label,name, value, handleChildValue, placeText}) {
  return (
    <div className="grid lg:col-span-2">
          <label className="text-sm font-semibold">{label}</label>
          <textarea
            className=" min-h-44  ms-1 my-2 p-[30px] bg-gray-200 placeholder:text-slate-500 text-sm leading-6 font-semibold tracking-wider rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500"
            placeholder={placeText}
            // onChange={(e) =>
            //   setProfileInfo({
            //     ...profileInfo,
            //     aboutCompany: e.target.value,
            //   })
            // }
            // value={profileInfo.aboutCompany}
          ></textarea>
        </div>
  )
}

export default TextArea