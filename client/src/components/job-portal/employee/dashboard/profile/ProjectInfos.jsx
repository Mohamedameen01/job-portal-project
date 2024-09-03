import React from "react";
import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";
import TextArea from "../../../TextArea";

function ProjectInfos() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">My Projects</h2>
      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Project Name"}
          type={"text"}
          placeText={"Job Portal"}
          name={"projectName"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Start Date"}
          type={"date"}
          placeText={""}
          name={"startDate"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"End Date"}
          type={"date"}
          placeText={""}
          name={"endDate"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <div className="grid">
          <label className="text-sm font-semibold">Currently Working</label>
          <select className="ms-1 my-2 p-[21px] bg-gray-200 placeholder:text-slate-500 text-sm font-semibold tracking-wide rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500">
            <option value="" className="capitalize">
              currently working
            </option>
            <option value="" className="capitalize">
              yes
            </option>
            <option value="" className="capitalize">
              no
            </option>
          </select>
        </div>

        <InputForms
          title={"Used Technologies"}
          type={"text"}
          placeText={"React"}
          name={"skills"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <TextArea label={"Description"} name={""} value={""} handleChildValue={""} placeText={"A detailed description of the certification or job."} />
      </div>
      
      <FormButton   
        text={"Save"}
        // saveParentValue={handleProfileSave}
      />
    </div>
  );
}

export default ProjectInfos;
