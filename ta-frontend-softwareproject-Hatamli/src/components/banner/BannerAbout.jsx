import image from "../../assets/images/aboutbg.png";
import RedButton from "../buttons/RedButton";

const Banner = () => {
  return (
    <div className="w-full grid md:grid-cols-2 bg-[white]">
      <div className="col-span-1 flex justify-center items-center max-md:py-20">
        <div className="max-md:flex max-md:flex-col max-md:items-center">
          <p className="font-libre max-md:hidden text-[17px] font-bold text-[#252B42]">
            ABOUT COMPANY
          </p>
          <h1 className="font-abril max-md:text-[44px] text-[81px] text-[#252B42] max-w-[573px] leading-tight my-8">
            ABOUT US
          </h1>
          <p
            className="font-libre text-[20px] font-bold text-[#737373] max-w-[376px]"
            style={{ letterSpacing: "1px" }}
          >
            We know how large objects will act, but things on a small scale
          </p>
          <div className="mt-8">
            <RedButton text="Get Quote Now" icon={null} />
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
