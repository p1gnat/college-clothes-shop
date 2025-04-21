import React from "react";
import "./ProductCard.css";
import CardDiscount from "../Body/CardDiscount";

const ProductCard = () => {
  return (
    <div style={{ margin: "20px 0 40px 0" }}>
      <CardDiscount
        img="./main/cards/black-dress.png"
        h3="Элегантное платье"
        rating="3.5"
        price="240"
        oldPrice="260"
        discount="20"
      />
    </div>
  );
};

export default ProductCard;
