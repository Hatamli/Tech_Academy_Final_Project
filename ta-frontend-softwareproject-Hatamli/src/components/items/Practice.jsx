import React from "react";
import PracticeCard from "../cards/PracticeCard";
import image1 from "../../assets/images/unsplash_QANOF9iJlFs.png"
import image2 from "../../assets/images/unsplash_3shfnfzdFVc.png"
import image3 from "../../assets/images/unsplash_Zf2Y3O5s4UQ.png"
import image4 from "../../assets/images/unsplash_WM6Rj6yITvs.png"

const Practice = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto my-20 pt-20">
      <p className="font-libre text-center text-[#B73225] text-[20px]">
        Practice Advice
      </p>
      <h2 className="font-libre text-center text-[#252B42] font-bold text-[26px] my-3">
        Featured Products
      </h2>
      <p className="font-libre text-center text-[#737373]">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-24">
        <PracticeCard img={image2}/>
        <PracticeCard img={image1}/>
        <PracticeCard img={image3}/>
        <PracticeCard img={image4}/>
      </div>
    </div>
  );
};

export default Practice;
