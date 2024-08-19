import React from "react";
import {
  StudyAboutUs,
  StudyAppRates,
  StudyBlog,
  StudyContact,
  StudyCountries,
  StudyFeatureCard,
  StudyFeatures,
  StudyFeedback,
  StudyHomeBanner,
  StudyInstitutions,
  StudyQuestions,
  StudyServices,
  StudyVisa,
} from "../../../components/study-abroad";

function HomePage() {
  return (
    <>
      <StudyHomeBanner />
      <StudyFeatures />
      <StudyAboutUs />
      <StudyFeatureCard />
      <StudyServices />
      <StudyVisa />
      <StudyAppRates />
      <StudyCountries />
      <StudyQuestions />
      <StudyFeedback />
      <StudyBlog />
      <StudyInstitutions />
      <StudyContact />
    </>
  );
}

export default HomePage;
