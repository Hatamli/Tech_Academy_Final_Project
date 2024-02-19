import React from "react";
import image1 from "../../assets/images/unsplash_1-aA2Fadydc.png";
import image2 from "../../assets/images/unsplash_gMsnXqILjp4.png";
import image from "../../assets/images/unsplash_Lks7vei-eAg.png";
import image3 from "../../assets/images/unsplash_mcSDtbWXUZU.png";
import image4 from "../../assets/images/unsplash_PSmDDeXaEWE.png";

const Galery = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <div className="col-span-1">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="col-span-1 grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <img src={image1} alt="" className="w-full h-full" />
        </div>
        <div className="col-span-1">
          <img src={image2} alt="" className="w-full h-full" />
        </div>
        <div className="col-span-1">
          <img src={image3} alt="" className="w-full h-full" />
        </div>
        <div className="col-span-1">
          <img src={image4} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
