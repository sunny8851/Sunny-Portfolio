import React from "react";
import JorrneyPath from "./JorrneyPath";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
const Journey = () => {
  return (
    <div className="max-h-[1605px] pb-20 bg-[#17202A] p-5   " id="Journey">
      <div className="text-center p-5 pt-2 text-white text-5xl mb-12">
        Journey
      </div>
      <div className="  max-w-[1150px] w-full ml-auto mr-auto ">
        <div className="gap-6 w-full mx-auto xl:flex ">
          <JorrneyPath users={Education} Topic="Education" icon={SchoolIcon} />
          <JorrneyPath users={Work} Topic="Experience" icon={WorkIcon} />
        </div>
      </div>
    </div>
  );
};
const Education = [
  {
    Title: "B.tech",
    Name: "G.L bajaj institute of technology and management , GR. Noida",
    Location: "GR. noida, U.P",
    Date: "2019 - 2023",
    Score: "CGPA - 8.1",
  },
  {
    Title: "12th CBSE",
    Name: "G.B.S.S.S. NO-1 , New Delhi",
    Location: "New Delhi",
    Date: "2017 - 2018",
    Score: "Percentage- 73%",
  },
  {
    Title: "10th CBSE",
    Name: "G.B.S.S.S. NO-3 , New Delhi",
    Location: "New Delhi",
    Date: "2015 - 2016",
    Score: "CGPA - 8.0",
  },
];
const Work = [
  {
    Title: "Easync books",
    Name: "Full-Stack developer",
    Location: "NOIDA,UP",
    Date: "Sep 23 - Present",
  },
  {
    Title: "Parentune",
    Name: "SDE-1",
    Location: "Gurgaon, HR",
    Date: "June 23 - Sep 23",
  },

  {
    Title: "Parentune",
    Name: "Frontend Developer Intern",
    Location: "Gurgaon, HR",
    Date: "march 22  -  August 22",
  },
];
export default Journey;
