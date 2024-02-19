import React from "react";
import Partners from "../../components/common/Partners";
import Banner from "../../components/banner/BannerShop";
import Body from "../../components/items/ShopBody";

const ShopPage = () => {
  return (
    <div>
      <Banner />
      <Body/>
      <div className="bg-[#FAFAFA]">
        <Partners />
      </div>
    </div>
  );
};

export default ShopPage;
