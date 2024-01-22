import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import profile from "../src/images/profile4.jpg";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ReactWhatsapp from "react-whatsapp";
const About = () => {
  return (
    <div className="bg-[#17202A]   text-white pb-20 max-h-[1450px]" id="About">
      <div className="max-w-[1200px]  ml-auto mr-auto">
        <div className="text-center">
          <div className=" pt-12 text-sm">Get to know</div>
          <div className="mb-28  text-2xl text-blue-500">About me</div>
        </div>
        <div className="sm:flex   justify-center">
          <img
            className="max-h-[400px] ml-auto mr-auto max-w-[500px] sm:ml-20 "
            src={profile}
          ></img>
          <div>
            <div className="flex flex-wrap sm:mt-0 mt-5 gap-5 ml-8  mr-2 justify-center">
              <div className="relative text-center items-center   h-40 w-40 rounded-md bg-red-300">
                <div
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "50%",
                    left: "50%",
                    margin: "-50px 0 0 -50px",
                  }}
                >
                  <EmojiEventsIcon />
                  <div className="mt-2 text-lg">Experince</div>
                  <div className="text-sm">1+ Year</div>
                </div>
              </div>
              <div className="relative text-center items-center   h-40 w-40 rounded-md bg-red-300">
                <div
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "50%",
                    left: "50%",
                    margin: "-50px 0 0 -50px",
                  }}
                >
                  <PeopleIcon />
                  <div className="mt-2 text-lg">Worked</div>
                  <div className="text-sm">in 2 company</div>
                </div>
              </div>{" "}
              <div className="relative text-center items-center   h-40 w-40 rounded-md bg-red-300">
                <div
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "50%",
                    left: "50%",
                    margin: "-50px 0 0 -50px",
                  }}
                >
                  <AssignmentTurnedInIcon />
                  <div className="mt-2 text-lg">Projects</div>
                  <div className="text-sm">20+ Completed</div>
                </div>
              </div>
            </div>
            <div className="max-w-[550px] mt-8 ml-8">
              I am an experienced Full-stack developer with over 1+ years of
              professional experience. My skills include developing responsive
              and scalable user interfaces, as well as working with REST APIs
              and Database. I possess expertise in both frontend and backend
              development and have successfully contributed to live projects.
            </div>
            <ReactWhatsapp
              element="small"
              number="+91-9958693592"
              message="Hello Sunny!!!"
            >
              <button className="bg-blue-400 ml-8 p-2 mt-8 rounded-sm">
                Let's Talk
              </button>
            </ReactWhatsapp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
