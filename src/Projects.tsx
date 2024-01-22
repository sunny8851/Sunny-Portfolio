import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import profile2 from "./images/profile2.jpeg";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

export default function Projects() {
  const clicked = () => {
    alert("Github link for this project is private.");
  };
  const demoClicked = () => {
    alert(
      "Live demo not available due to firebase monthly subscription expired. Please contact me for live demo"
    );
  };
  // console.log(props);
  return (
    <div className="bg-[#17202A] pb-20  p-2 pt-8" id="Projects">
      <div className="bg-blue-500  max-w-[1150px] ml-auto mr-auto p-5 rounded-3xl ">
        <div className="text-center text-3xl font-bold mb-10">Projects</div>
        <div className="grid  lg:grid-cols-2 grid-cols-1 max-w-[1100px] justify-center items-center  gap-12 ml-auto mr-auto pt-4">
          {project.map((m) => (
            <div className="bg-[#9FE2BF] pb-3 max-h-[600px] rounded-xl">
              <div className="text-center my-2 mb-6 text-xl font-bold ">
                {m.title}
              </div>
              <div className="min-[450px]:flex gap-2">
                <div>
                  <img
                    src={m.Image}
                    className="rounded-xl pl-2 h-40 w-60 min-w-[200px]"
                  />
                </div>
                <div className="sm:relative max-h-[500px] pt-0 sm:pb-7 p-2">
                  <div className="mb-2">{m.Description}</div>
                  <div className="flex gap-2 sm:absolute sm:bottom-0 ">
                    <div
                      onClick={clicked}
                      className="bg-blue-600 cursor-pointer hover:bg-blue-900 p-1 rounded-md px-2"
                    >
                      Github
                    </div>
                    <div
                      onClick={demoClicked}
                      className="bg-blue-600 cursor-pointer hover:bg-blue-900 p-1 rounded-md px-2"
                    >
                      Live Demo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const project = [
  {
    title: "Smart Ai",
    Description: `"Smart AI" is a voice assistant application that allows users to engage with real-time AI. Users simply provide commands, and Smart AI will deliver results based on those commands in real-time.`,
    Image: "./images/smart.jpg",
  },
  {
    title: "E-commercial Site",
    Image: "./images/amazon.png",
    Description: `
The "e-commercial" website is an online platform for purchasing items. Users have the option to log in, browse products, add items to their cart, and proceed with the purchase.`,
  },
  {
    title: "Disney-hotstar Clone",
    Image: "./images/disney.png",
    Description: `The Disney+Hotstar clone is a video streaming website that offers a wide selection of blockbuster movies and TV shows. Users can log in, bookmark their favorite shows and movies for easy access.`,
  },
  {
    title: "Talk Buddy",
    Image: "./images/chat.jpg",
    Description:
      "Talk Buddy is an instant messaging platform. It allows multiple users to chat in group or any two individuals to chat",
  },
];
