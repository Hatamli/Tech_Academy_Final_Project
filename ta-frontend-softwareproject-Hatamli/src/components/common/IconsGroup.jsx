import React from "react";
import CartIcon from "../icons/Cart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

const IconsGroup = ({ onClick, onLike }) => {
  return (
    <>
      <div
        className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center me-2 cursor-pointer"
        onClick={onLike}
      >
        <FavoriteBorderIcon />
      </div>
      <div
        className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center me-2 cursor-pointer"
        onClick={onClick}
      >
        <CartIcon />
      </div>
      <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
        <VisibilityIcon />
      </div>
    </>
  );
};

export default IconsGroup;
