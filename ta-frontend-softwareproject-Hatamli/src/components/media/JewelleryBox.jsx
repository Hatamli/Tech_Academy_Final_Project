import React from "react";
import image from "../../assets/images/media bg-cover.png";
import play from "../../assets/images/playbtn.png";
import DarkButton from "../buttons/DarkButton";
import { ChevronRight } from "@mui/icons-material";

const JewelleryBox = () => {
  return (
    <div className="my-20 max-w-[1050px] max-md:px-10 m-auto grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 flex justify-center flex-col mb-20 items-center md:hidden">
        <div className="bg-[#E74040] w-[94px] h-[7px]"></div>
        <p className="text-[14px] text-[#737373] font-libre mb-3 mt-8">
          Bracelets
        </p>
        <h5 className="font-abril font-bold text-[44px] text-[#252B42] max-md:text-center">
          Jewelry BOX
        </h5>
        <p className="text-[#737373] font-libre mt-3 mb-6 text-center">
          Problems trying to resolve the conflict between the two majors
        </p>
        <DarkButton text={"See More Offers"} icon={<ChevronRight />} />
      </div>
      <div className="col-span-1 relative">
        <img src={image} alt="video" className="w-full" />
        <img
          src={play}
          alt="play"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="col-span-1 flex justify-end items-center max-md:hidden">
        <div className="max-w-[395px]">
          <div className="bg-[#E74040] w-[94px] h-[7px]"></div>
          <p className="text-[14px] text-[#737373] font-libre mb-3 mt-8">
            Bracelets
          </p>
          <h5 className="font-abril font-bold text-[44px] text-[#252B42]">
            Jewelry BOX
          </h5>
          <p className="text-[#737373] font-libre mt-3 mb-6">
            Problems trying to resolve the conflict between the two majors
          </p>
          <DarkButton text={"See More Offers"} icon={<ChevronRight />} />
        </div>
      </div>
    </div>
  );
};

export default JewelleryBox;
