import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import caruselImg from "../../assets/images/shop-hero-3-product-slide-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import RedButton from "../buttons/RedButton";

const BannerCarousel = () => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={caruselImg} className="w-full relative z-10 max-md:h-[638px] object-cover" alt="" />
        <div className="absolute z-50 top-[50%] left-[50%] flex flex-col items-center text-white -translate-x-[50%] -translate-y-[50%]">
          <h1 className="max-md:text-[44px] max-w-[558px] font-abril text-[81px] text-center leading-[100%]">
            Diamond Ankle Bracelet
          </h1>
          <p className="font-bold text-[20px] font-libre my-6">
            Ring 18k White Gold
          </p>
          <RedButton icon={null} text={"Start Now"} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={caruselImg} className="w-full relative z-10" alt="" />
        <div className="absolute z-50 top-[50%] left-[50%] flex flex-col items-center text-white -translate-x-[50%] -translate-y-[50%]">
          <h1 className="max-w-[558px] font-abril text-[81px] text-center leading-[100%]">
            Diamond Ankle Bracelet
          </h1>
          <p className="font-bold text-[20px] font-libre my-6">
            Ring 18k White Gold
          </p>
          <RedButton icon={null} text={"Start Now"} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerCarousel;
