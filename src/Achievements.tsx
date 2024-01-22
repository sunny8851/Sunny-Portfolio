import React from "react";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Achievements = () => {
  const Rewards = [
    {
      title: "Leetcode Weekly contest-332",
      rank: "Global rank 1574 out of 24102 participants",
    },
    { title: "Codechef Jan Challenge", rank: "Global rank-439" },
    { title: "Codechef Sep Challenge", rank: "Global rank-669" },
    // { title: "Leetcode Weekly contest-322", rank: "AIR-420" },
    { title: "Leetcode+GFG", rank: "500+problems" },
    { title: "Codechef", rank: "3-Star" },
    { title: "Hacker Rank", rank: "5-Star" },
  ];
  return (
    <div
      className="bg-[#17202A] pb-32 p-2   text-white max-h-[1915px]"
      id="achievement"
    >
      <div className="text-center text-lg mb-8">Achievements</div>
      <div className="bg-sky-500 px-2 py-2 min-[400px]:p-5  max-h-[1920px] max-w-[750px]  rounded-lg ml-auto mr-auto">
        <div className="max-w-[700px]   grid min-[550px]:grid-cols-3 max-[350px]:grid-cols-1 grid-cols-2 gap-2 ml-auto mr-auto">
          {Rewards.map((m) => (
            <div className=" text-center  items-center justify-center ml-auto mr-auto  h-40 w-40 rounded-md bg-red-300">
              <div className="mt-5">
                <EmojiEventsIcon />
                <div className="mt-2 text-lg">{m.title}</div>
                <div className="text-red-500 text-sm">{m.rank}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
