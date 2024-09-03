import React from "react";
import FormButton from "../../../FormButton";
import InputForms from "../../../InputForms";
import SelectionOption from "../../../SelectionOption";
import ChoiceSelection from "../../../ChoiceSelection";

function ExperienceInfos() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">
        My Experience
      </h2>
      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Job Title"}
          type={"text"}
          placeText={"UI Designer"}
          name={"jobTitle"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Company Name"}
          type={"text"}
          placeText={"TechX"}
          name={"company"}
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
        <ChoiceSelection label={"Currently Working"} option={"currently working"} /> 
      
        <InputForms
          title={"Achievements"}
          type={"text"}
          name={"achievements"}
          placeText={"Award-Winning Mobile App Design"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
      </div>
      <FormButton
        text={"Save"}
        // saveParentValue={handleProfileSave}
      />
    </div>
  );
}

export default ExperienceInfos;
