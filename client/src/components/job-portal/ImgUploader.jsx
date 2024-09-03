import React, { useEffect, useRef, useState } from "react";

import { BsArrowUp } from "react-icons/bs";
import { uploadImgFile } from "../../utils/uploadFuncs";

function ImgUploader({ boxText, name, value, handleChildValue }) {
  const [inputImg, setInputImg] = useState("");
  const [inputError, setInputError] = useState("");
  const fileRef = useRef(null);

  useEffect(() => {
    setInputImg(value);
  }, [value]);

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    const maxSize = 3 * 1024 * 1024;
    const validFileType = ["image/jpeg", "image/png"];

    if (file && validFileType.includes(file.type)) {
      uploadImgFile(file, maxSize)
        .then((data) => {
          setInputImg(data);
          setInputError("");
          if (data) {
            handleChildValue(name, data);
          } else {
            handleChildValue(name, inputImg);
          }
        })
        .catch((error) => {
          setInputError(error.message);
        });
    } else {
      setInputError("Please upload a valid JPEG or PNG file");
    }
  };

  return (
    <div className="grid md:flex items-center md:gap-3">
      <div
        className="my-4 ms-4 p-5 border-dashed border-2 border-slate-300 rounded-md cursor-pointer"
        onClick={() => fileRef.current.click()}
      >
        {inputImg ? (
          <img
            src={inputImg}
            alt={name}
            className="w-24 h-24 object-cover rounded-md"
          />
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
        <input type="file" hidden ref={fileRef} onChange={handleUploadImg} />
      </div>
      <div className="grid gap-2">
        <p className=" text-sm">
          Max file size is 3MB And Suitable files are .jpeg & .png
        </p>
        {inputError && <p className="text-sm text-red-500">{inputError}</p>}
      </div>
    </div>
  );
}

export default ImgUploader;
