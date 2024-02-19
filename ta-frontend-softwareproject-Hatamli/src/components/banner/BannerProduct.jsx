import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ position, image, title }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {position == "left" && (
        <div className="col-span-1 max-md:mt-10">
          <img src={image} alt="" className="w-full" />
        </div>
      )}
      <div className="col-span-1 flex justify-center items-center max-md:py-10">
        <div className="max-w-[430px]  max-md:text-center">
          <h3 className="font-abril text-[44px] text-[#252B42] mb-3">
            {title}
          </h3>
          <h4 className="text-[#737373] font-libre text-[20px] font-bold">
            ON ALL GOLD RINGS
          </h4>
          <p className="text-[#737373] font-libre md:max-w-[351px] my-4 max-md:px-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <div className="flex gap-3 max-md:flex-col max-md:items-center">
              <Link
                to={"/shop"}
                className="h-[52px] w-[160px] bg-[#252B42] text-white border border-[#252B42] rounded-[5px] flex items-center justify-center font-libre font-bold text-[14px]"
              >
                Shop Now
              </Link>
              <Link
                to={"/"}
                className="h-[52px] w-[160px] bg-transparent text-[#252B42] border border-[#252B42] rounded-[5px] flex items-center justify-center font-libre font-bold text-[14px]"
              >
                View More
              </Link>
          </div>
        </div>
      </div>
      {position == "right" && (
        <div className="col-span-1">
          <img src={image} alt="" className="w-full" />
        </div>
      )}
    </div>
  );
};

export default Banner;
