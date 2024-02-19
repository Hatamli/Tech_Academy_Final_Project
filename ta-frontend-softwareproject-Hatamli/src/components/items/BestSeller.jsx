import React from "react";
import best1 from "../../assets/images/best1.png"
import best2 from "../../assets/images/best2.png"
import best3 from "../../assets/images/best3.png"
import BestSellerCard from "../cards/BestSellerCard";

const BestSeller = () => {
  return (
    <div className="my-20 max-w-[1050px] max-md:px-10 m-auto grid grid-cols-1 md:grid-cols-9 justify-between items-center">
      <div className="col-span-1 md:col-span-2 max-md:flex flex-col items-center text-center md:text-start">
        <h4 className="font-libre font-bold text-[#2DC071] text-[20px]">
          Featured Products
        </h4>
        <h5 className="font-abril font-bold text-[44px] text-[#252B42]">
          BESTSELLER PRODUCTS
        </h5>
        <p className="text-[#737373] font-libre mt-3 mb-6 max-w-[217px]">
          Problems trying to resolve the conflict between the two Classical
          physics: Newtonian.
        </p>
        <p className="text-[#252B42] text-[14px] font-libre mt-3 mb-6">
          Bracelets
        </p>
      </div>
      <div className="col-span-1 md:col-span-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:scale-75 xl:scale-100 md:translate-x-20">
        <BestSellerCard image={best1} title={"20k Sterling Gold"} type="Tanzanites" discount="$6.48" price="$16.48"/>
        <BestSellerCard image={best2} title={"Stainless Steel Cutout "} type="Tanzanites" discount="$6.48" price="$16.48"/>
        <BestSellerCard image={best3} title={"Rhombus Diamond "} type="Bracelets" discount="$6.48" price="$16.48"/>
      </div>
    </div>
  );
};

export default BestSeller;
