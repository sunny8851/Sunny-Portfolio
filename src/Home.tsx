import React from "react";
import profile from "../src/images/profile.png";
import pic from "../src/images/pic.jpeg";
import { Link } from "react-scroll";
// const profile = require("../public/images/profile.png");
const Home = () => {
  return (
    <div className="">
      <div
        className="h-[665px] flex text-white bg-[#17202A] items-center justify-center"
        id="Home"
      >
        <div className=" p-2 flex items-center justify-between w-[1200px]">
          <div className="ml-2">
            <div className="text-base pl-1">Hey, I'm</div>
            <div className="text-3xl lg:text-5xl  mb-4 font-semibold">
              Sunny Kumar Ray
            </div>
            <div
              style={{ wordSpacing: "5px", letterSpacing: "2px" }}
              className="text-base   mb-20 font-extralight flex"
            >
              FULL-STACK DEVELOPER
            </div>
            <div className=" min-[645px]:flex gap-2 text-base">
              <div>
                {" "}
                <a
                  href="Sunny_Kumar Ray_Resume.pdf"
                  download="Sunny_Kumar Ray_Resume.pdf"
                >
                  <button className="mt-2  hover:bg-red-400  max-w-[150px] p-2 px-2 text-white bg-sky-600 text-center">
                    Download Resume
                  </button>
                </a>
              </div>
              <Link
                // activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <button className="mt-2  hover:bg-[#DC7633] w-[150px] p-2 min-[645px]:ml-2 px-2 text-white bg-sky-600 text-center">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                // objectPosition: "25% 25%",
              }}
              className="ml-2 "
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
