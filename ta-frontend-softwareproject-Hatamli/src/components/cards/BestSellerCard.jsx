import React from "react";
import CustomCard from ".";
import Colors from "../common/Colors";

const BestSellerCard = ({ image, title, price, discount, type }) => {
  return (
    <div>
      {/* <div>
            <img src={image} alt=''/>
        </div>
        <div>
            <h4>{title}</h4>
        </div> */}
      <CustomCard
        discount={discount}
        image={image}
        price={price}
        title={title}
        type={type}
      />
      <div className="flex justify-center">
      <Colors />
      </div>
    </div>
  );
};

export default BestSellerCard;
