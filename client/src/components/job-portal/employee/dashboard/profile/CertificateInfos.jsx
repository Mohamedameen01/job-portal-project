import React from "react";
import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";
import TextArea from "../../../TextArea";

function CertificateInfos() {
  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">My Certification</h2>
      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Certification"}
          type={"text"}
          placeText={"Google Cloud Certified"}
          name={"certificateName"}
          //   handleChildValue={handleProfileInfo}
          //   value={employerInfo?.companyName}
        />
        <InputForms
          title={"Issued"}
          type={"text"}
          placeText={"Google"}
          name={"issuedOrganization"}
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
        <TextArea label={"Description"} name={""} value={""} handleChildValue={""} placeText={"A detailed description of the certification or job."} />
        
      </div>
      <FormButton
        text={"Save"}
        // saveParentValue={handleProfileSave}
      />
    </div>
  );
}

export default CertificateInfos;
