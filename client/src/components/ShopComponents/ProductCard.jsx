import React from "react";
import ShopCard from "../Body/ShopCard";
import "./ProductCard.css";

const ProductCard = ({ image, name, rating, price, id }) => {
  return (
    <div style={{ margin: "20px 0 40px 0" }}>
      <ShopCard
        img={`http://localhost:5000${image}`}
        h3={name}
        rating={rating}
        price={price}
        id={id}
      />
    </div>
  );
};

export default ProductCard;
