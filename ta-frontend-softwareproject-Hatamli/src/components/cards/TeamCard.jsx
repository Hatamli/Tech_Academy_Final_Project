import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const TeamCard = ({image}) => {
  return (
    <div className="col-span-1">
      <div>
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="text-center flex flex-col gap-2 mt-7">
        <p className=" text-[#252B42] font-bold">Username</p>
        <p className="text-[14px] text-[#737373] font-bold">Profession</p>
        <div className="icons flex justify-center gap-3 !text-[#B73225]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
