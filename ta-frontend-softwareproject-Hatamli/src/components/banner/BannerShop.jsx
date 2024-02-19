import React from "react";
import bgimage from "../../assets/images/shopbg.png"
import ShopBannerCard from "../cards/ShopBannerCard";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={bgimage}
        className="w-full relative z-10 max-md:h-[638px] object-cover"
        alt=""
      />
      <div className="absolute z-50 top-[50%] left-[50%] flex flex-col items-center text-white -translate-x-[50%] -translate-y-[50%]">
        <h1 className="max-md:text-[44px] max-w-[558px] font-abril text-[81px] text-center leading-[100%]">
        SHOP
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:w-[800px] lg:w-[1100px] mt-20 gap-5">
            <ShopBannerCard title={"Earrings, Onyx"}/>
            <ShopBannerCard title={"Pendants"}/>
            <ShopBannerCard title={"Tanzanites"}/>
            <ShopBannerCard title={"Earrings, Onyx"}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
