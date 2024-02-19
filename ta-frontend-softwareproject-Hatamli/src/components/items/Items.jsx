import React from "react";
import item1 from "../../assets/images/item1.png";
import Item from "../cards/ItemCard";

const Items = () => {
  const products = [
    {
      id: 1,
      title: "Gold 9″ Diamond",
      type: "Earrings",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 2,
      title: "Stainless Steel Cutout",
      type: "Ring",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 3,
      title: "Diamond Cut Anklet",
      type: "Anklet",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 4,
      title: "Arced Custom Ring",
      type: "Ring",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 5,
      title: "Rhombus Diamond",
      type: "Necklace",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 6,
      title: 'Gold 9" Diamond',
      type: "Earrings",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 7,
      title: 'Veronece 18K Clad 10"',
      type: "Bracelet",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
    {
      id: 8,
      title: "Arced Custom Ring",
      type: "Ring",
      price: "$16.48",
      discount: "$6.48",
      image: item1,
    },
  ];

  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto">
      <h2 className="font-libre max-md:text-center font-bold text-[26px] text-[#252B42]">
        BESTSELLER PRODUCTS
      </h2>
      <div className="h-[2px] w-full bg-[#ECECEC] mt-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.map((product) => (
          <Item
            key={product.id}
            image={item1}
            title={product.title}
            type={product.type}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
