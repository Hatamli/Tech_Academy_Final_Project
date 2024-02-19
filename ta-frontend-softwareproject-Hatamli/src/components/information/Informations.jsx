import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Information from "./Information";
import PhoneIcon from "../icons/Phone";
import EnvelopeIcon from "../icons/Envelope";

const Informations = () => {
  return (
    <div className="max-w-[1050px] max-md:p-10 m-auto items-center my-20 max-md:bg-[#FAFAFA] ">
      <p className="text-[14px] font-libre font-bold mt-3 text-center">
        VISIT OUR OFFICE
      </p>
      <h3 className="text-[#252B42] m-auto max-w-[515px] font-abril text-[44px] text-center">
        We help small businesses with big ideas
      </h3>
      <div className="grid max-md:gap-5 md:grid-cols-3 items-end mt-20">
        <Information bgColor={"white"} icon={<PhoneIcon />} />
        <Information
          bgColor={"#252B42"}
          icon={
            <LocationOnIcon
              fontSize="large"
              className="scale-[2.5] text-[#B73225] my-5"
            />
          }
        />
        <Information bgColor={"white"} icon={<EnvelopeIcon />} />
      </div>
    </div>
  );
};

export default Informations;
