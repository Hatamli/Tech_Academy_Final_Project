import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ image, type, title, price, discount }) => {
  return (
    <div className="col-span-1 mt-6">
      <div className="w-full">
        <Link to={"/products"} className="w-full">
          <img src={image} alt="" className="w-full" />
        </Link>
      </div>
      <div className="mt-5 text-center">
        <h4 className="max-w-[131px] m-auto text-[17px] font-bold font-libre text-[#252B42]">
          <Link to={"/products"}>{title}</Link>
        </h4>
        <p className="text-[14px] text-[#737373] font-libre my-3">{type}</p>
        <p className="font-libre text-[14px] text-[#BDBDBD] font-bold">
          {price} <span className="text-[#004E7C]">{discount}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
