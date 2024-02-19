import React from "react";
import arrow from "../../assets/images/Arrow 2.png";
import RedButton from "../buttons/RedButton";

const Talk = () => {
  return (
    <div className="flex flex-col items-center my-20 ">
      <img src={arrow} alt="" />
      <p className="text-[17px] font-libre font-bold mt-3">
        WE Can't WAIT TO MEET YOU
      </p>
      <h3 className="text-[#252B42] font-abril text-[81px]">Let’s Talk</h3>
      <RedButton icon={null} text={"Try it free now"} />
    </div>
  );
};

export default Talk;
