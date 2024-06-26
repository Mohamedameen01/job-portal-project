import React from "react";
import UserCareerInfo from "./UserCareerInfo";
import UserBoxInfo from "./UserBoxInfo";

function UserDetailsBody() {
  const education = [
    {
      id: 1,
      row1: "Bachlors in Fine Arts",
      year: "2012-2015",
      row2: "Modern College",
    },
    {
      id: 2,
      row1: "Computer Science",
      year: "2015-2017",
      row2: "Harvard University",
    },
  ];

  const works = [
    {
      id: 1,
      row1: "Product Designer",
      row2: "spotify",
      year: "2017-2020",
    },
    {
      id: 2,
      row1: "Sr UX Engineer",
      row2: "Dropbox Inc",
      year: "2020-2023",
    },
  ];

  const awards = [
    {
      id: 1,
      row1: "Perfect Attendance Programs",
      row2: "Software Algorithm",
      year: "2008-2014",
    },
    {
      id: 2,
      row1: "Top Performer Recognition",
      row2: "Web Application",
      year: "2012-2014",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      <div className="col-span-2">
        <h1 className="text-lg font-semibold ">Candidates About</h1>
        <p className="mt-4 text-md text- text-[#00000080]">
          Hello my name is Nicole Wells and web developer from Portland. In
          pharetra orci dignissim, blandit mi semper, ultricies diam.
          Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id
          orci laoreet tempor non consequat enim. Sed vitae aliquam velit.
          Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer
          vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et
          pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum
          aliquam.Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
          erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
          molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor
          luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec
          erat ut libero vulputate pulvinar.
        </p>
        <UserCareerInfo title={"Education"} data={education} color={"red"} />
        <UserCareerInfo
          title={"Work & Experience"}
          data={works}
          color={"blue"}
        />
        <UserCareerInfo title={"Awards"} data={awards} color={"orange"} />
      </div>
      <div className="flex flex-col gap-3">
        <UserBoxInfo />
        {/* <CompanyBoxInfo title={jobInfo?.company} /> */}
      </div>
    </div>
  );
}

export default UserDetailsBody;
