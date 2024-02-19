import React from "react";
import CardIcon from "../icons/Card";

const ShopBannerCard = ({ title }) => {
  return (
    <div className="col-span-1 flex gap-4">
      <div>
      <CardIcon />
      </div>
      <div className="text-white">
        <h3 className="text-[17px] font-libre font-bold">{title}</h3>
        <p className="font-montserrat text-[12px]">17 PRODUCT</p>
      </div>
    </div>
  );
};

export default ShopBannerCard;
