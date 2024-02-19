import React from "react";
import image from "../../assets/images/aboutFooter.png";

const AboutFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-7 bg-[#2A7CC7] flex justify-center items-center text-white">
        <div className="max-md:flex max-md:flex-col max-md:p-20 max-md:items-center max-md:text-center ">
          <p className="font-libre text-[17px] font-bold">WORK WITH US</p>
          <h2 className="text-[44px] font-abril mt-6">Now Let’s grow Yours</h2>
          <p className="max-w-[480px] font-montserrat my-6">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="w-[130px] h-[52px] text-[14px] font-montserrat font-bold flex justify-center items-center border border-white rounded-[5px]">
            Button
          </button>
        </div>
      </div>
      <div className="col-span-5 max-md:hidden">
        <img alt="" src={image} className="w-full" />
      </div>
    </div>
  );
};

export default AboutFooter;
