import React from "react";
import circle from "../../assets/images/circle.png";

const EasyToUse = () => {
  return (
    <div className="flex gap-5 items-start col-span-1">
      <img src={circle} alt="circle" />
      <div>
        <h6 className="text-[14px] font-montserrat font-bold text-[#252B42]">
          Easy to use
        </h6>
        <p className="text-[12px] font-montserrat text-[#737373] max-w-[150px] mt-1">
          Things on a very small that you have any direct
        </p>
      </div>
    </div>
  );
};

export default EasyToUse;
