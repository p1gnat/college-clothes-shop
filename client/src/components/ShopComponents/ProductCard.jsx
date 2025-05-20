import React from "react";
import ShopCard from "../Body/ShopCard";
import "./ProductCard.css";

const ProductCard = ({ image, name, rating, price, id }) => {
  const url = "https://college-clothes-shop-backend.onrender.com";

  return (
    <div style={{ margin: "20px 0 40px 0" }}>
      <ShopCard
        img={`${url}${image}`}
        h3={name}
        rating={rating}
        price={price}
        id={id}
      />
    </div>
  );
};

export default ProductCard;
