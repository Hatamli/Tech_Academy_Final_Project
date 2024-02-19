import React from "react";
import image from "../../assets/images/unsplash_QANOF9iJlFs.png";
import EasyToUse from "../cards/EasyToUse";

const TopProducts = () => {
  return (
    <div className="flex max-md:flex-col gap-20 items-center max-w-[1050px] max-md:px-10 m-auto mt-40 mb-20">
      <div>
        <img src={image} alt="image" />
      </div>
      <div className="max-md:px-10">
          <h5 className="font-abril font-bold text-[44px] text-[#252B42]">
            Our Top Products
          </h5>
          <p className="text-[#737373] font-libre mt-3 mb-6 max-w-[600px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <EasyToUse/>
            <EasyToUse/>
            <EasyToUse/>
            <EasyToUse/>
          </div>
      </div>
    </div>
  );
};

export default TopProducts;
