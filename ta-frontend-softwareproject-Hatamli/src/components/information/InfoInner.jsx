import React from "react";
import image1 from "../../assets/images/innerproduct1.png";
import image2 from "../../assets/images/innerproduct2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const InfoInner = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto grid md:grid-cols-3 my-10">
      <div className="col-span-1">
        <h2 className="font-libre font-bold text-[26px] text-[#252B42]">
          The quick fox jumps over
        </h2>
        <ul className="font-libre font-bold text-[14px] text-[#737373] md:max-w-[500px] flex flex-col gap-2 my-4">
          <li>
            <ArrowForwardIosIcon /> the quick fox jumps over the lazy dog
          </li>
          <li>
            <ArrowForwardIosIcon /> the quick fox jumps over the lazy dog
          </li>
          <li>
            <ArrowForwardIosIcon /> the quick fox jumps over the lazy dog
          </li>
          <li>
            <ArrowForwardIosIcon /> the quick fox jumps over the lazy dog
          </li>
        </ul>
        <p className="font-libre text-[#737373] md:max-w-[332px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 max-md:mt-10 gap-7">
        <img src={image1} alt="" className="col-span-1 rounded-md" />
        <img src={image2} alt="" className="col-span-1 rounded-md" />
      </div>
    </div>
  );
};

export default InfoInner;
