import React, { useRef, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

import MultiLists from "./MultiLists";
import { Link } from "react-router-dom";

function InfoForm() {
  const [inputError, setInputError] = useState("");
  const fileRef = useRef(null);

  const qualification = ["sslc", "plus two", "under graduate", "post graduate"];
  const maxSize = 5 * 1024 * 1024;
  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxSize) {
        console.log("Big file");
        return setInputError("File must be less than 5 mb");
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        const dataUrl = fileReader.result;
        console.log(dataUrl);
      };
    } else {
      setInputError("It must be a image file");
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="bg-white grid gap-3 p-5 rounded-md shadow-lg">
        <div className="flex items-center gap-3 ">
          <div className="p-4 text-2xl outline outline-1  rounded-full">
            <IoPersonOutline />
          </div>
          <button
            onClick={() => fileRef.current.click()}
            className="outline outline-1 rounded-lg p-2"
          >
            Upload Your Photo
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
        <div className="flex items-center gap-3">
          <input type="date" className="outline outline-1 p-1 rounded-lg" />
          <input
            type="text"
            placeholder="Age"
            className="w-24 outline outline-1 ps-3 p-1 rounded-lg"
          />
        </div>
        <MultiLists title={"Your hobbies"} />
        <MultiLists title={"Your interest"} />
        <select
          name="qualification"
          className="border-none outline outline-1 p-1 uppercase"
        >
          {qualification.map((item, index) => (
            <option key={index} value="{item}">
              {item}
            </option>
          ))}
        </select>
        <Link
          to={"/role-selection"}
          className="text-center bg-[#673ab7] text-white text-md font-semibold p-1 rounded-lg"
        >
          Skip
        </Link>
        <Link
          to={"/role-selection"}
          className="text-center bg-green-600 text-white text-md font-semibold p-1 rounded-lg"
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default InfoForm;
