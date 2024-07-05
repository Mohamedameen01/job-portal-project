import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

import { uploadImgFile } from "../../utils/uploadFuncs";
import InputField from "../InputField";

function InformationForm() {
  const [infoValues, setInfoValues] = useState({
    image: "",
  });
  const [inputError, setInputError] = useState("");
  const fileRef = useRef(null);

  const maxSize = 5 * 1024 * 1024;

  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    uploadImgFile(file, maxSize)
      .then((data) => {
        setInfoValues({ ...infoValues, image: data });
        console.log(data);
      })
      .catch((error) => {
        setInputError(error);
        console.log(error);
      });
  };
  const handleSubmitBtn = () => {
    console.log(infoValues);
  };
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-fit md:w-5/12 lg:w-4/12 xl:w-3/12 h-[85%] bg-white grid  m-2 p-4 rounded-md shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center gap-3 ">
          <div>
            {infoValues?.image ? (
              <img
                src={infoValues.image}
                className="w-28 h-28  object-cover rounded-full"
                alt="user-image"
              />
            ) : (
              <div className="border-2 border-[#673ab7] text-[#673ab7] rounded-full p-4 text-5xl">
                <IoPersonOutline />
              </div>
            )}
          </div>
          <button
            onClick={() => fileRef.current.click()}
            className="text-sm lg:text-md bg-[#673ab7] text-white font-semibold px-3 py-2 outline outline-1 rounded-lg"
          >
            Upload Company Logo
            <input
              type="file"
              hidden
              ref={fileRef}
              onChange={handleUploadImg}
            />
          </button>
        </div>

        {inputError && (
          <span className="text-rose-600 text-sm">{inputError}</span>
        )}
        <InputField label={"company name"} type={"text"} />
        <InputField label={"company email"} type={"email"} />
        <InputField label={"company contact"} type={"tel"} />
        <InputField label={"industry type"} type={"text"} />

        <div className="flex justify-end gap-3 mt-2">
          <Link
            to={"/employer"}
            className="flex justify-center items-center  bg-[#673ab7] text-white text-md font-semibold p-2 rounded-lg"
          >
            Skip
          </Link>

          <Link
            to={"/employer"}
            onClick={handleSubmitBtn}
            className="flex justify-center items-center bg-green-600 text-white text-md font-semibold p-2 rounded-lg"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InformationForm;
