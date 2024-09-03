import React from "react";
import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";

function EducationInfos() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">
        My Education
      </h2>
      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Degree"}
          type={"text"}
          placeText={"B.A.English"}
          name={"degree"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Institution"}
          type={"text"}
          placeText={"JNU University"}
          name={"institution"}
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
        <InputForms
          title={"Field Of Study"}
          type={"text"}
          placeText={"Literature"}
          name={"fieldOfStudy"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Grade"}
          type={"text"}
          placeText={"A"}
          name={"grade"}
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

export default EducationInfos;
