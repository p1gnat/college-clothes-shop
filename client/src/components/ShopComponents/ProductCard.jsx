import React from "react";
import "./ProductCard.css";
import Card from "../Body/Card";

const ProductCard = ({ image, name, rating, price }) => {
  return (
    <div style={{ margin: "20px 0 40px 0" }}>
      <Card
        img={`http://localhost:5000${image}`}
        h3={name}
        rating={rating}
        price={price}
      />
    </div>
  );
};

export default ProductCard;
