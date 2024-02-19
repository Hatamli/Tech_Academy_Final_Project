import React from "react";
import image from "../../assets/images/unsplash_Lks7vei-eAg.png";

const Info = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto grid grid-cols-1 md:grid-cols-5 my-10">
      <div className="col-span-1 md:col-span-3">
        <h2 className="font-libre font-bold text-[26px] text-[#252B42]">
          the quick fox jumps over{" "}
        </h2>
        <p className="font-libre text-[#737373] max-w-[500px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met. <br /> <br />
          <span className="ps-5 inline-block border-s-[3px] border-s-[#004E7C]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </span>{" "}
          <br /> <br />
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2 max-md:mt-10">
        <img src={image} alt="" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default Info;
