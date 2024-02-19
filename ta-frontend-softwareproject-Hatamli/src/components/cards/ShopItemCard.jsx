import React, { useState } from "react";
import StarFilled from "../icons/StarFilled";
import StarOutlined from "../icons/StarOutlined";
import Colors from "../common/Colors";
import IconsGroup from "../common/IconsGroup";
import { Link } from "react-router-dom";

const ShopItemCard = ({ id,image, title, price, discount, onClick, onLike }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="col-span-1 mt-6 bg-white"
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
    >
      <div className="w-full relative">
        <Link to={`/products/${id}`} className="w-full">
          <img src={image} alt="" className="w-full" />
        </Link>

        <div
          className={`flex absolute left-[50%] -translate-x-[50%] bottom-[5%] duration-500 ${
            show ? "" : "opacity-0"
          }`}
        >
          <IconsGroup onClick={onClick} onLike={onLike} />
        </div>
      </div>
      <div className="mt-5 text-start px-7 pb-10">
        <h4 className=" text-[17px] font-bold font-libre text-[#252B42]">
          <Link to={"/products"}>{title}</Link>
        </h4>
        <p className="font-libre text-[14px] text-[#BDBDBD] font-bold my-3">
          {price} <span className="text-[#004E7C]">{discount}</span>
        </p>
        <div className="flex">
          <div className="flex scale-75 -translate-x-4">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
          </div>
          <span className="-translate-x-4 font-bold font-libre text-[14px] text-[#737373] translate-y-1">
            10 Reviews
          </span>
        </div>
        <div className="flex justify-end mt-3">
          <Colors />
        </div>
      </div>
    </div>
  );
};

export default ShopItemCard;
