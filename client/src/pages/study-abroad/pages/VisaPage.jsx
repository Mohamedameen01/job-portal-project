import React from "react";
import { InnerContactForm, InnerFooter, InnerHeader, StudyAppRates, VisaBanner, VisaGuideCard } from "../../../components/study-abroad";

function VisaPage() {
  return <>
    <InnerHeader />
    <VisaBanner />
    <StudyAppRates />
    <VisaGuideCard />
    <InnerContactForm />
    <InnerFooter />
  </>;
}

export default VisaPage;
