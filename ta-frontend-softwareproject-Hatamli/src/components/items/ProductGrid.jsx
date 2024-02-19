import React from "react";
import ShopItemCard from "../cards/ShopItemCard";
import product1 from "../../assets/images/product-cover-5.jpg";
import product2 from "../../assets/images/product-cover-6.jpg";
import product3 from "../../assets/images/product-cover-7.jpg";
import { addToCart, addToLike } from "../../redux/features/indexSlice";
import { useDispatch } from "react-redux";

function ProductGrid({ query }) {
  const dispatch = useDispatch();
  const incrementQuantity = (item) => {
    dispatch(addToCart(item));
  };
  const likeItem = (item) => {
    dispatch(addToLike(item));
  };
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {query === ""
        ? products.map((product) => (
            <ShopItemCard
              id={product.id}
              key={product.id}
              discount={product.price}
              image={product.image}
              price={product.originalPrice}
              title={product.name}
              onClick={() => incrementQuantity(product)}
              onLike={() => likeItem(product)}
            />
          ))
        : products
            .filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((product) => (
              <ShopItemCard
                id={product.id}
                key={product.id}
                discount={product.price}
                image={product.image}
                price={product.originalPrice}
                title={product.name}
                onClick={() => incrementQuantity(product)}
                onLike={() => likeItem(product)}
              />
            ))}
      {}
    </div>
  );
}

export default ProductGrid;
