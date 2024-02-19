import React from "react";
import TopProductPage from "../../components/items/TopProductPage";
import Partners from "../../components/common/Partners";
import Items from "../../components/items/Items";
import BannerCarousel from "../../components/banner/BannerCarusel";
import image1 from "../../assets/images/productbannerimg1.png"
import image2 from "../../assets/images/productbannerimg2.png"
import Banner from "../../components/banner/BannerProduct";
import InfoInner from "../../components/information/InfoInner";

const ProductPage2 = () => {
  return (
    <div>
      <BannerCarousel/>
      <Banner image={image1} position={"right"} title={"DISCOUNT OF 20%"}/>
      <Banner image={image2} position={"left"} title={"BEST OF THE YEAR"}/>
      <TopProductPage />
      <InfoInner />
      <div className="pt-10">
        <Items />
      </div>
      <div className="bg-[#FAFAFA]">
        <Partners />
      </div>
    </div>
  );
};

export default ProductPage2;
