import partner from "../../assets/images/partner.png";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";

const Partners = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto items-center py-[50px] flex flex-wrap gap-y-10 justify-center max-sm:flex-col md:justify-between">
      <img src={partner} alt="partner" />
      <img src={partner1} alt="partner" />
      <img src={partner2} alt="partner" />
      <img src={partner3} alt="partner" />
      <img src={partner4} alt="partner" />
      <img src={partner5} alt="partner" />
    </div>
  );
};

export default Partners;
