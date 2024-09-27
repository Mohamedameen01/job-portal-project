import React, { useEffect, useRef, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";

import { uploadFile } from "../../utils/uploadFuncs";

function FileUploader({ boxText, name, value, handleChildValue }) {
  const [inputFile, setInputFile] = useState("");
  const [fileError, setFileError] = useState("");
  const fileRef = useRef(null);

  useEffect(() => {
    setInputFile(value);
  }, [value]);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    const maxSize = 3 * 1024 * 1024;

    uploadFile(file, maxSize)
      .then((data) => {
        handleChildValue(name, data);
      })
      .catch((error) => {
        setFileError(error);
      });
  };

  return (
    <div className="grid md:flex items-center md:gap-3">
      <div
        className="my-4 ms-4 p-5 border-dashed border-2 border-slate-300 rounded-md cursor-pointer"
        onClick={() => fileRef.current.click()}
      >
        {inputFile ? (
          <div
            className="w-12 lg:w-14 h-12 lg:h-14 p-2 flex justify-center items-center text-2xl lg:text-3xl border-2 ${
             border-[#20c997] text-[#20c997]
           rounded-full"
          >
            <FaRegFile />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl text-slate-500">
              <BsArrowUp />
            </div>
            <span className="mx-auto mt-2 text-sm font-semibold">
              {boxText}
            </span>
          </div>
        )}
        <input type="file" hidden ref={fileRef} onChange={handleUploadFile} />
      </div>
      <div className="grid gap-2">
        <p className=" text-sm">
          Max file size is 3MB And Suitable Only PDF, DOC, and DOCX files are
          allowed.
        </p>
        {fileError && <p className="text-sm text-red-500">{fileError}</p>}
      </div>
    </div>
  );
}

export default FileUploader;
