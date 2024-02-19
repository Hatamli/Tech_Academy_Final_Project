const MainProductCard = ({ image, title, type }) => {
  return (
    <div>
      <div>
        <img alt="" src={image} className="max-md:translate-x-10" />
      </div>
      <div className="text-center">
        <h5 className="font-libre font-bold text-[26px] text-[#252B42]">
          {title}
        </h5>
        <p className="font-libre text-[14px] text-[#737373]">{type}</p>
      </div>
    </div>
  );
};

export default MainProductCard;
