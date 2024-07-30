import React from "react";
import profile1 from "./images/profile1.png";
import profile2 from "./images/profile2.jpeg";
import VerifiedIcon from "@mui/icons-material/Verified";
const Skills = () => {
  return (
    <div
      className="bg-[#17202A] pt-2 pb-8  text-white max-h-[1725px]"
      id="Skills"
    >
      <div className="text-center text-4xl font-semibold ">Skills</div>
      <div className=" mt-12 lg:flex  justify-between gap-5 max-w-[1100px] ml-auto mr-auto">
        <div className="ml-2  lg:max-w-[350px] max-w-[1170px] bg-white text-black rounded-2xl p-2  ">
          <div className="flex mt-5">
            <div>
              <img
                src={profile2}
                className="rounded-full min-h-[80px] max-h-[80px] max-w-[80px] min-w-[80px] "
              />
            </div>
            <div className="ml-5 ">
              ❝ Learning never stops, and the great thing about it is that no
              one can ever take it away from you. ❞
            </div>
          </div>
          <div>
            <div className="mt-10 text-center font-semibold text-base">
              These are the skills which i have earned
            </div>
            <div className="bg-slate-600 pb-10  w-fit p-5 rounded-xl ml-auto mr-auto mt-10">
              <div className="flex mb-5">
                <div className="h-3 w-3 rounded-full mt-[7px] mr-2  bg-black"></div>
                <h1>Web Development</h1>
              </div>
              <div className="flex mb-5">
                <div className="h-3 w-3 rounded-full  mt-[7px] mr-2 bg-black"></div>
                <h1>Data Stucture and Algorithms</h1>
              </div>
              <div className="flex">
                <div className="h-3 w-3 rounded-full mt-[7px] mr-2  bg-black"></div>
                <h1>Problem Solving</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-h-[1700px] pb-2 max-w-[1100px] mr-2 bg-blue-500 rounded-3xl">
          <div className="text-center mt-4 text-2xl text-red-700 font-bold">
            Skills
          </div>

          <div>
            <h1 className="ml-6 text-black font-bold text-2xl">
              Programming Languages
            </h1>
            <div className="flex flex-wrap gap-5 m-6 mt-2">
              {Plang.length != 0 &&
                Plang.map((m: any) => (
                  <div className="">
                    <div className="flex gap-1 text-lg font-semibold">
                      <VerifiedIcon />
                      {m.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1 className="ml-6 text-black font-bold text-2xl">Frontend</h1>
            <div className="flex flex-wrap gap-5 m-6 mt-2">
              {Frontend.length != 0 &&
                Frontend.map((m: any) => (
                  <div className="">
                    <div className="flex gap-1 text-lg font-semibold">
                      <VerifiedIcon />
                      {m.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1 className="ml-6 text-black font-bold text-2xl">Backend</h1>
            <div className="flex flex-wrap gap-5 m-6 mt-2">
              {Backend.length != 0 &&
                Backend.map((m: any) => (
                  <div className="">
                    <div className="flex gap-1 text-lg font-semibold">
                      <VerifiedIcon />
                      {m.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* <div className=" h-[400px] w-[400px] bg-blue-500 rounded-3xl">
          <div className="text-center">Languages</div>
        </div> */}
      </div>
    </div>
  );
};
const Plang = [
  { title: "javascript" },
  { title: "Typescript" },
  { title: "java" },
  { title: "C++" },
  { title: "C" },
];
const Frontend = [
  { title: "React.JS" },
  { title: "Next.JS" },
  { title: "Redux" },
  { title: "Tailwind CSS" },
  { title: "HTML" },
  { title: "Css" },
  { title: "Material-UI" },
  { title: "Ant Design" },
];
const Backend = [
  { title: "Node.JS" },
  { title: "Express.JS" },
  { title: "MongoDB" },
  { title: "SQL" },
  { title: "AWS" },
  { title: "Firebase" },
  { title: "Rest API" },
];

export default Skills;
