import React, { useEffect, useRef, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MultiLists from "./MultiLists";
import { uploadImgFile } from "../../utils/uploadFuncs";
import Loader from "../Loader";
import { resetUserSuccess, setUserInfo } from "../../redux/userSlice";

function InfoForm() {
  const [inputError, setInputError] = useState("");
  const [infoValues, setInfoValues] = useState({
    image: "",
    dob: "",
    age: "",
    gender: "",
    hobbies: null,
    interests: null,
    qualification: "",
  });

  const { loading, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const navigate = useNavigate();

  const options = ["sslc", "plus two", "under graduate", "post graduate"];
  const gender = ["male", "female", "others"];
  const maxSize = 5 * 1024 * 1024;

  const handleUploadImg = async (e) => {
    const file = await e.target.files[0];

    uploadImgFile(file, maxSize)
      .then((data) => {
        setInfoValues({ ...infoValues, image: data });
      })
      .catch((error) => {
        setInputError(error);
      });
  };

  const handleUserHobbies = (values) => {
    setInfoValues({ ...infoValues, hobbies: values });
  };

  const handleUserInterests = (values) => {
    setInfoValues({ ...infoValues, interests: values });
  };

  const handleSubmitBtn = () => {
    dispatch(setUserInfo(infoValues));
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(resetUserSuccess());
        navigate("/auth/role-selection");
      }, [2000]);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className=" w-fit md:w-5/12 lg:w-4/12 xl:w-3/12 h-[85%] bg-white grid gap-3 m-2 p-4 rounded-md shadow-lg overflow-y-auto">
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

        <div className="grid grid-cols-3 gap-3">
          <input
            type="date"
            value={infoValues.dob}
            onChange={(e) =>
              setInfoValues({ ...infoValues, dob: e.target.value })
            }
            className="col-span-2 p-1 outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] rounded-lg"
          />
          <input
            type="text"
            placeholder="Age"
            value={infoValues.age}
            onChange={(e) =>
              setInfoValues({ ...infoValues, age: e.target.value })
            }
            className="outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] ps-3 p-1 rounded-lg"
          />
        </div>

        <MultiLists title={"Your hobbies"} dataToParent={handleUserHobbies} />
        <MultiLists
          title={"Your interest"}
          dataToParent={handleUserInterests}
        />

        <select
          name="gender"
          onChange={(e) =>
            setInfoValues({
              ...infoValues,
              gender: e.target.value.toUpperCase(),
            })
          }
          className="text-sm outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] p-2 uppercase rounded-lg"
        >
          <option>your gender</option>
          {gender.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="qualification"
          onChange={(e) =>
            setInfoValues({
              ...infoValues,
              qualification: e.target.value.toUpperCase(),
            })
          }
          className="text-sm outline outline-2 outline-[#673ab7] focus:outline foucus:outline-1 focus:outline-[#673ab7] p-2 uppercase rounded-lg"
        >
          <option>choose your qualification</option>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={handleSubmitBtn}
            className="flex justify-center items-center bg-[#673ab7] text-white text-md font-semibold p-1 rounded-lg"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default InfoForm;
