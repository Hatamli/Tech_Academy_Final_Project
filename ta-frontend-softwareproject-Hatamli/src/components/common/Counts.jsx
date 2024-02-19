import React from "react";

const Counts = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="font-abril text-[81px] text-[#252B42] mb-0 pb-0">{title}</h4>
      <p className="font-libre text-[17px] text-[#737373]">{description}</p>
    </div>
  );
};

export default Counts;
