import React from "react";
import { Link } from "react-router-dom";

const Information = ({ bgColor, icon }) => {
  return (
    <div
      className="col-span-1 text-center flex flex-col gap-5 py-20 items-center"
      style={{ backgroundColor: bgColor }}
    >
      {icon}
      <p className="font-bold font-montserrat text-[14px]" style={{color:bgColor=="#252B42"?"white":"#252B42"}}>
        georgia.young@example.com <br />
        georgia.young@ple.com
      </p>
      <Link className="font-bold font-montserrat" to={"/"} style={{color:bgColor=="#252B42"?"white":"#252B42"}}>
        Get Support
      </Link>
      <button className="text-[14px] font-bold font-montserrat text-[#B73225] h-[54px] w-[193px] border border-[#B73225] rounded-[5px] md:rounded-[37px]">
        Submit Request
      </button>
    </div>
  );
};

export default Information;
