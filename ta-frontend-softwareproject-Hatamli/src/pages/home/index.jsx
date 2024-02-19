import React from "react";
import Products from "../../components/items/Products";
import JewelleryBox from "../../components/media/JewelleryBox";
import BestSeller from "../../components/items/BestSeller";
import TopProducts from "../../components/items/TopProducts";
import Practice from "../../components/items/Practice";
import SubscribeHome from "../../components/forms/SubscribeHome";
import EasyUse from "../../components/information/EasyUse";
import Banner from "../../components/banner/BannerHome";
import Partners from "../../components/common/Partners";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Partners />
      <Products />
      <JewelleryBox />
      <BestSeller />
      <TopProducts />
      <Practice />
      <SubscribeHome />
      <EasyUse />
    </div>
  );
};

export default HomePage;
