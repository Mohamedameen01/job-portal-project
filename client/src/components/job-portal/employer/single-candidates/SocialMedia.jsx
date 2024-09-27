import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

function SocialMedia() {
  const { candidate } = useSelector((state) => state.employer);
  return (
    <div className="bg-customBgColor p-4 flex justify-between items-center shadow-md rounded-md">
      <h1 className="text-lg font-semibold tracking-wide">Social Media</h1>
      <div className="flex items-center gap-2">
        <a href={candidate?.socialMedia?.twitter} target="_blank">
          <FaTwitter className={`text-blue-300 hover:text-blue-500 text-lg ${candidate?.socialMedia?.twitter && "cursor-pointer"}`} />
        </a>

        <a href={candidate?.socialMedia?.linkedin} target="_blank">
          <FaLinkedinIn className={`text-blue-300 hover:text-blue-500 text-lg ${candidate?.socialMedia?.linkedin && "cursor-pointer"}`} />
        </a>

        <a href={candidate?.socialMedia?.facebook} target="_blank">
          <FaFacebookF className={`text-blue-300 hover:text-blue-500 text-lg ${candidate?.socialMedia?.facebook && "cursor-pointer"}`} />
        </a>

        <a href={candidate?.socialMedia?.instagram} target="_blank">
          <FaInstagram className={`text-blue-300 hover:text-blue-500 text-lg ${candidate?.socialMedia?.instagram && "cursor-pointer"}`} />
        </a>

        <a href={candidate?.socialMedia?.github} target="_blank">
          <TbBrandGithubFilled className={`text-blue-300 hover:text-blue-500 text-lg ${candidate?.socialMedia?.github && "cursor-pointer"}`} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
