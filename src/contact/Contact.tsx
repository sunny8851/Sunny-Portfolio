import React from "react";
import Easycontact from "./Easycontact";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="bg-[#17202A] pb-12 max-h-[1700px]" id="Contact">
      <div className="text-white text-center  mb-12 text-lg">Contact Me</div>
      <div>
        <div className="min-[650px]:flex max-h-[1550px] max-w-[800px] gap-16 pl-16 bg-black rounded-md items-center justify-center  ml-auto mr-auto p-10 md:justify-center md:items-center">
          <Easycontact />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
