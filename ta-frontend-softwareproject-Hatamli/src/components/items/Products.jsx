import MainProductCard from "../cards/MainProductCard";
import prod1 from "../../assets/images/fixed-height.png"
import prod2 from "../../assets/images/fixed-height (1).png"
import prod3 from "../../assets/images/fixed-height (2).png"
import card1 from "../../assets/images/product-cover-5 (3).png"
import card2 from "../../assets/images/product-cover-5 (2).png"
import card3 from "../../assets/images/product-cover-5 (1).png"
import card4 from "../../assets/images/product-cover-5.png"
import CustomCard from "../cards";

const Products = () => {
  return (
    <div className="mt-20 max-w-[1050px] max-md:px-10 m-auto">
      <p className="font-libre text-center text-[#737373] text-[20px]">Featured Products</p>
      <h2 className="font-libre text-center text-[#252B42] font-bold text-[26px] my-3">BESTSELLER PRODUCTS</h2>
      <p className="font-libre text-center text-[#737373]">Problems trying to resolve the conflict between </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20">
        <div className="col-span-1">
            <MainProductCard image={prod1} title={"Ankle Bracelet"} type={"Bracelets"}/>
        </div>
        <div className="col-span-1">
            <MainProductCard image={prod2} title={"Arced Custom Ring "} type={"Tanzanites"}/>
        </div>
        <div className="col-span-1">
            <MainProductCard image={prod3} title={"Veronece 18K Clad 10″ "} type={"Bracelets"}/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-28">
        <CustomCard image={card1} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card2} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card3} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card4} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card1} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card2} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card3} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
        <CustomCard image={card4} title={"Station Ankle Bracelet"} type={"Earrings, Onyx"} price={"$16.48"} discount={"$6.48"}/>
      </div>
    </div>
  );
};

export default Products;
