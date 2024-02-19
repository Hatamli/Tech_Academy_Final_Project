import React, { useState } from "react";
import Carousel from "../carusel";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Colors from "../common/Colors";
import RedButton from "../buttons/RedButton";
import IconsGroup from "../common/IconsGroup";
import { useLocation } from "react-router-dom";
import product1 from "../../assets/images/product-cover-5.jpg";
import product2 from "../../assets/images/product-cover-6.jpg";
import product3 from "../../assets/images/product-cover-7.jpg";
import { useDispatch } from "react-redux";
import { addToCart, addToLike } from "../../redux/features/indexSlice";

const Slider = () => {
  const products = [
    {
      id: 1,
      name: "Stainless Steel Cutout",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product1,
    },
    {
      id: 2,
      name: "Gold 9″ Diamond",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product2,
    },
    {
      id: 3,
      name: "20k Sterling Gold",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product3,
    },
    {
      id: 4,
      name: "Gold 9″ Diamond",
      price: "$7.48",
      originalPrice: "$26.48",
      image: product1,
    },
    {
      id: 5,
      name: "20k Sterling Gold",
      price: "$20.48",
      originalPrice: "$16.48",
      image: product2,
    },
    {
      id: 6,
      name: "20k Sterling Gold",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product3,
    },
    {
      id: 7,
      name: "Stainless Steel Cutout",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product1,
    },
    {
      id: 8,
      name: "20k Sterling Gold",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product2,
    },
    {
      id: 9,
      name: "20k Sterling Gold",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product3,
    },
    {
      id: 10,
      name: "Diamond Steel Cutout",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product1,
    },
    {
      id: 11,
      name: "20k Sterling Gold",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product2,
    },
    {
      id: 12,
      name: "20k Sterling Gold",
      price: "$6.48",
      originalPrice: "$16.48",
      image: product3,
    },
  ];
  const location = useLocation();
  const [product, setProduct] = useState(
    products.filter(
      (item) => item.id === parseInt(location.search.split("=")[1])
    )[0] || products[0]
  );

  const dispatch = useDispatch();
  const incrementQuantity = (item) => {
    dispatch(addToCart(item));
  };
  const likeItem = (item) => {
    dispatch(addToLike(item));
  };

  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto grid grid-cols-1 md:grid-cols-2 pb-10">
      <Carousel />
      <div className="col-span-1 overflow-hidden ps-5">
        <h2 className="text-[44px] font-abril ">{product.name}</h2>
        <p className="text-[14px] font-bold text-[#737373] font-libre my-3">
          <StarIcon className="text-[#F3CD03]" />
          <StarIcon className="text-[#F3CD03]" />
          <StarIcon className="text-[#F3CD03]" />
          <StarIcon className="text-[#F3CD03]" />
          <StarOutlineIcon className="text-[#F3CD03]" />
          <span className="ms-2">10 Reviews</span>
        </p>
        <p className="price text-[24px] text-[#252B42] font-bold font-montserrat">
          {product.price}
        </p>
        <p className="text-[14px] font-bold text-[#737373] font-libre ">
          Availability : <span className="text-[#B73225]">In Stock </span>
        </p>
        <p className="max-w-[553px] text-[#737373] font-libre my-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <div className="w-[445px] h-[1px] bg-[#BDBDBD] my-3"></div>
        <div className="scale-[2] translate-x-[50%] mt-10">
          <Colors />
        </div>
        <div className="flex gap-3 md:gap-8 items-center mt-10">
          <RedButton icon={null} text={"Select Options"} />{" "}
          <span className="flex gap-3 scale md:scale-125">
            <IconsGroup
              onClick={() => incrementQuantity(product)}
              onLike={() => likeItem(product)} 
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
