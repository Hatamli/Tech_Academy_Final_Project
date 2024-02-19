import React from "react";
import EasyToUse from "../cards/EasyToUse";

const EasyUse = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10  m-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <EasyToUse />
      <EasyToUse />
      <EasyToUse />
      <EasyToUse />
    </div>
  );
};

export default EasyUse;
