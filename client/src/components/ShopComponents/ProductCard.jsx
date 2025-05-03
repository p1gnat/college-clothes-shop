import React from "react";
import { NavLink } from "react-router";
import Card from "../Body/Card";

import "./ProductCard.css";

const ProductCard = ({ image, name, rating, price, id }) => {
  return (
    <div style={{ margin: "20px 0 40px 0" }}>
      <Card
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
