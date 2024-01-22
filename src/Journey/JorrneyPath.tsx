import React from "react";
interface UsersListProps {
  users?: User[];
  Topic: string;
  icon: any;
}

interface User {
  Title?: string;
  Name: string;
  Location: string;
  Date: string;
  Score?: string;
}
const JorrneyPath = (data: UsersListProps) => {
  // console.log(data);
  return (
    <div className="bg-blue-500 max-w-[600px] w-full mx-auto p-5 mt-5 rounded-md pb-12">
      <div className="flex items-center justify-center gap-2 pb-5  ">
        <data.icon />
        <h1 className="text-center pb-5 text-xl font-bold pt-4">
          {data.Topic}
        </h1>
      </div>
      <div>
        {data.users?.map((m: User, i: number) => (
          <div className="flex      ">
            <div className="w-[260px]">
              {i % 2 == 0 && (
                <div className="mr-2 ">
                  <h1 className="font-bold">
                    {m.Title}
                    <div className="text-sm font-normal">{` (${m.Name})`}</div>
                  </h1>
                  {!m.Score && (
                    <h3 className="text-sm font-extralight">({m.Location})</h3>
                  )}
                  <h3 className="text-sm font-extralight">{m.Date}</h3>
                  <h3 className="text-sm font-extralight">{m.Score}</h3>
                </div>
              )}
            </div>
            <div className=" ">
              <div className="h-3 w-3 rounded-full   bg-black"></div>
              <div className=" h-full ml-[5px] w-[2px]  bg-black"></div>
            </div>
            <div className="w-[250px]">
              {i % 2 != 0 && (
                <div className="ml-2 p-2 pt-0">
                  <h1 className="font-bold">
                    {m.Title}
                    <div className="text-sm font-normal">{` (${m.Name})`}</div>
                  </h1>
                  {!m.Score && (
                    <h3 className="text-sm font-extralight">({m.Location})</h3>
                  )}
                  <h3 className="text-sm font-extralight">{m.Date}</h3>
                  <h3 className="text-sm font-extralight">{m.Score}</h3>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JorrneyPath;
