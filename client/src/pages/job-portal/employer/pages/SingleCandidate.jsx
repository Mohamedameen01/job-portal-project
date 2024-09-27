import React, { useEffect } from "react";
import {
  AboutCandidate,
  CandidateAwards,
  CandidateEducation,
  CandidateExperience,
  SingleCandidateHead,
  SingleCandidateSide,
  SocialMedia,
} from "../../../../components/job-portal/employer/single-candidates";
import { useDispatch } from "react-redux";
import { getSelectedCandidate } from "../../../../redux/employerSlice";
import { useParams } from "react-router-dom";

function SingleCandidate() {
  const dispatch = useDispatch();
  const { id } = useParams(); 

  useEffect(() => {
    dispatch(getSelectedCandidate(id))
  }, [dispatch, id])

  return (
    <>
      <SingleCandidateHead />
      <div className="max-w-[1440px] mx-auto bg-white px-3 py-5 grid lg:grid-cols-3">
        <div className="w-full lg:w-4/5 grid gap-4">
          <SingleCandidateSide />
          <SocialMedia />
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white text-base tracking-wider rounded-md">Message Me</button>
        </div>

        <div className="col-span-2 px-3 ">
          <AboutCandidate />
          <CandidateEducation />
          <CandidateExperience />
        </div>
      </div>
    </>
  );
}

export default SingleCandidate;
