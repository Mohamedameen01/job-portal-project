import React from "react";

import { IoBriefcaseOutline } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { LuCheckCircle } from "react-icons/lu";

import ProcessHead from "./ProcessHead";
import InputForms from "../InputForms";
import SelectOptions from "../SelectOptions";
import FormButton from "../FormButton";

import {
  employmentTypesOptions,
  experienceOptions,
  jobTypesOption,
  locationOptions,
  qualificationOptions,
} from "../../../../utils/jobs-data";

function JobPosting() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">Post Job</h2>

      <div className="my-3 mx-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-between">
        <ProcessHead icon={<IoBriefcaseOutline />} title={"Job Detail"} />
        <ProcessHead icon={<FaMoneyBill1Wave />} title={"Package & Payments"} />
        <ProcessHead icon={<LuCheckCircle />} title={"Confirmation"} />
      </div>

      <div className="mt-5">
        <InputForms title={"Job Title"} type={"text"} placeText={"Title"} />
        <div className="mt-2 grid gap-2">
          <label className="text-sm font-semibold">Job Description</label>
          <textarea
            className=" min-h-64  ms-1 my-2 p-[30px] bg-gray-200 placeholder:text-slate-500 text-sm leading-6 font-semibold tracking-wider rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500"
            placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
          ></textarea>
        </div>
      </div>

      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms title={"Email Address"} type={"email"} />
        <InputForms title={"Specialisms"} type={"text"} />
        <InputForms title={"Industry"} type={"text"} />
        <SelectOptions
          title={"Job Type"}
          name={"jobType"}
          options={jobTypesOption}
        />
        <SelectOptions
          title={"Employment Type"}
          name={"employmentType"}
          options={employmentTypesOptions}
        />
        <SelectOptions
          title={"Experience"}
          name={"experience"}
          options={experienceOptions}
        />
        <SelectOptions
          title={"Qualification"}
          name={"qualification"}
          options={qualificationOptions}
        />
        <SelectOptions
          title={"Gender"}
          name={"gender"}
          options={["Male", "Female", "Other"]}
        />
        <SelectOptions
          title={"Location"}
          name={"location"}
          options={locationOptions}
        />
        <InputForms title={"Offered Salary"} type={"number"} />
        <div className="lg:col-span-2">
          <InputForms
            title={"Job Place"}
            type={"text"}
            placeText={
              "S 107, 4th Floor Monlash Business Centre Crescens Tower, South Kalamassery, Kochi, Kerala 682033, India"
            }
          />
        </div>
        <div className="lg:col-span-2">
          <InputForms
            title={"Application Deadline Date"}
            type={"text"}
            placeText={"20-04-2024"}
          />
        </div>
      </div>
      <FormButton text={"post"} />
    </div>
  );
}

export default JobPosting;
