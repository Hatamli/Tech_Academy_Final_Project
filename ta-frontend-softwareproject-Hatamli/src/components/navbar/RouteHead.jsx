import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const RouteHead = ({ main, additional,page }) => {
  return (
    <div className="mt-16 mb-20">
      {additional.length > 0 && (
        <p className="font-libre text-[17px] font-bold text-center text-[#737373]">
          {additional}
        </p>
      )}
      <h1 className="text-[#252B42] font-abril text-center"
      style={{fontSize:additional.length == 0?"81px":"44px"}}
      >
        {main}
      </h1>
      <p className="text-[#252B42] text-[14px] font-libre text-center">
        <Link to={"/"}>Home{" "}</Link>
        <span className="text-[16px] text-[#BDBDBD]">
          <ChevronRightIcon />
        </span>{" "}
        {page}
      </p>
    </div>
  );
};

export default RouteHead;
