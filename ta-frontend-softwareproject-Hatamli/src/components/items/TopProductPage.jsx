import React from "react";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Slider from "../carusel/Slider";

const TopProductPage = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="text-[14px] font-libre text-[#BDBDBD] h-[90px] max-w-[1050px] m-auto flex items-center justify-center md:justify-start">
          <Link to={"/"} className="text-[#252B42]">
            Home
          </Link>{" "}
          <ChevronRight /> Shop
        </div>
        <Slider />
      </div>
      <div className="flex items-center flex-col  w-full">
        <ul className="text-[14px] text-[#737373] flex gap-2 md:gap-10 my-10">
          <li className="font-montserrat font-bold max-md:underline">Description</li>
          <li className="font-libre">Additional Information</li>
          <li className="font-libre">
            Reviews <span className="text-[#004E7C]">(0)</span>
          </li>
        </ul>
        <div className="lg:w-[1050px] h-[1px] bg-[#ECECEC]"></div>
      </div>
    </>
  );
};

export default TopProductPage;
