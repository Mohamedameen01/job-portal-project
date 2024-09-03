import React from "react";
import FormButton from "../../../FormButton";
import InputForms from "../../../InputForms";
import FileUploader from "../../../FileUploader";
import TextArea from "../../../TextArea";

function Preference() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">My Resume</h2>
      <FileUploader
        boxText={"Browse Resume"}
        name={"resume"}
        //   handleChildValue={handleProfileInfo}
        //   value={employerInfo?.companyLogo}
      />
      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Current CTC"}
          type={"text"}
          placeText={"500000"}
          name={"currentCTC"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Expected CTC"}
          type={"text"}
          placeText={"800000"}
          name={"expectedCTC"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Total Experience"}
          type={"text"}
          placeText={"4 year"}
          name={"totalExperience"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"skills"}
          type={"text"}
          placeText={"Responsive Design"}
          name={"skills"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"language"}
          type={"text"}
          placeText={"English"}
          name={"languages"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <TextArea
          name={""}
          label={"About YourSelf"}
          value={""}
          handleChildValue={""}
          placeText={"A detailed description of the certification or job."}
        />
      </div>
      <FormButton
        text={"Save"}
        // saveParentValue={handleProfileSave}
      />
    </div>
  );
}

export default Preference;
