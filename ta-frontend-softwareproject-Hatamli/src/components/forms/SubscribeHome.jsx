import React from "react";
import Subscribe from "./Subscribe";

const SubscribeHome = () => {
  return (
    <div className=" py-20 bg-[#FAFAFA]">
      <div className="max-w-[1050px] max-md:px-10 m-auto max-md:text-center flex max-md:flex-col justify-between items-center">
        <h5 className="font-abril font-bold text-[44px] text-[#252B42] max-w-[438px]">
          Subscribe For Latest Newsletter
        </h5>
        <div>
          <Subscribe />
          <p className="text-[#737373] font-libre mt-3 mb-6">
            The gradual accumulation of information
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeHome;
