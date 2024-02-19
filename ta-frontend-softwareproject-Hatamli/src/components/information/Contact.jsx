import React from "react";
import RedButton from "../buttons/RedButton";

const Contact = () => {
  return (
    <div className=" py-20 bg-[#FAFAFA]">
      <div className="max-w-[1050px] max-md:px-10 m-auto flex max-md:flex-col max-md:items-start justify-between items-center">
        <div className="">
          <h3 className="text-[#252B42] font-bold font-libre text-[26px]">
            Consulting Agency For Your Business
          </h3>
          <p className="text-[#737373] font-libre">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <RedButton icon={null} text={"Contact Us"}/>
      </div>
    </div>
  );
};

export default Contact;
