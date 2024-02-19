import image from "../../assets/images/home-banner.png";
import RedButtonUpperCase from "../buttons/RedButtonUpperCase";

const Banner = () => {
  return (
    <div className="w-full grid md:grid-cols-2 bg-[#CFE6F4]">
      <div className="col-span-1 flex justify-center items-center max-md:text-center max-md:py-10">
        <div className="max-md:flex items-center max-md:scale-75 flex-col">
          <p className="font-libre text-[17px] font-bold text-[#B73225]">
            SUMMER 2022
          </p>
          <h1 className="font-abril text-[81px] text-[#252B42] max-w-[573px] leading-tight my-8">
            Diamond Ankle Bracelet
          </h1>
          <p
            className="font-libre text-[20px] font-bold text-[#737373] max-w-[376px]"
            style={{ letterSpacing: "1px" }}
          >
            Discount up to 35% only this month
          </p>
          <div className="mt-8">
          <RedButtonUpperCase text="SEE SALE PRODUCTS" icon={null}/>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img alt="" src={image} />
      </div>
    </div>
  );
};

export default Banner;
