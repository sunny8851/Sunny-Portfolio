import React from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ReactWhatsapp from "react-whatsapp";
const Easycontact = () => {
  return (
    <div className="">
      <div className="text-center mb-5 max-w-[550px] p-2 rounded-md bg-zinc-600">
        <CallIcon />
        <div>Voice Call</div> <div>995-869-3592</div>
        <a href="tel:+919958693592">
          <div className="text-red-500 mt-3 cursor-pointer">
            call me <ArrowForwardIcon sx={{ fontSize: 15 }} />
          </div>
        </a>
      </div>
      <div className="text-center mb-5 max-w-[550px] p-2 rounded-md bg-zinc-600">
        <MarkEmailReadIcon />
        <div>Email</div> <div>Sunnyr29811@gmail.com</div>
        <div
          onClick={() =>
            window.open(
              "mailto:sunnyr29811@gmail.com?subject=SendMail&body=Description"
            )
          }
          className="text-red-500 mt-3 cursor-pointer"
        >
          write me <ArrowForwardIcon sx={{ fontSize: 15 }} />
        </div>
      </div>

      <div className="text-center max-w-[550px] p-2 rounded-md bg-zinc-600">
        <WhatsAppIcon />
        <div>Whatsapp</div> <div>995-869-3592</div>
        <ReactWhatsapp
          element="small"
          number="+91-9958693592"
          message="Hello World!!!"
        >
          {" "}
          <div className="text-red-500 mt-3 cursor-pointer">
            write me <ArrowForwardIcon sx={{ fontSize: 15 }} />
          </div>
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default Easycontact;
