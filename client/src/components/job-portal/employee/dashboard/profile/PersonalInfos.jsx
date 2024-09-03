import React from "react";
import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";
import ImgUploader from "../../../ImgUploader";

function PersonalInfos() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">My Profile</h2>
      <ImgUploader
        boxText={"Browse Image"}
        name={"picture"}
        //   handleChildValue={handleProfileInfo}
        //   value={employerInfo?.companyLogo}
      />
      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Name"}
          type={"text"}
          placeText={"Jhon Doal"}
          name={"username"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Email Address"}
          type={"email"}
          placeText={"jhondoal@gmail.com"}
          name={"email"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Phone"}
          type={"number"}
          placeText={"9988587898"}
          name={"phone"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Date of Birth"}
          type={"date"}
          placeText={"20-12-2002"}
          name={"dateOfBirth"}
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

export default PersonalInfos;
