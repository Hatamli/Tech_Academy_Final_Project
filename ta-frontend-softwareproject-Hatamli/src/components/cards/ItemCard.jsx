import { Link } from "react-router-dom";

const Item = ({ image, title, type, price, discount }) => {
  return (
    <div className="col-span-1 mt-6 bg-white">
      <div className="w-full">
        <Link to={"/product"} className="w-full"><img src={image} alt="" className="w-full" /></Link>
      </div>
      <div className="mt-5 text-start px-7 pb-10">
        <h4 className="max-w-[131px] text-[17px] font-bold font-libre text-[#252B42]">
        <Link to={"/product"}>{title}</Link>
        </h4>
        <p className="text-[14px] text-[#737373] font-libre my-3">{type}</p>
        <p className="font-libre text-[14px] text-[#BDBDBD] font-bold">
          {price} <span className="text-[#004E7C]">{discount}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
