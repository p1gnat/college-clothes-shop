import React from "react";
import "./CardDiscount.css";

const Card = ({ img, h3, rating, price, oldPrice, discount }) => {
  return (
    <section className="card">
      <img src={img} alt={h3} />
      <h3>{h3}</h3>
      <p>
        {rating}
        <span>/5</span>
      </p>
      <h3 className="price">
        ${price}
        <span className="discount">${oldPrice}</span>
        <span className="discount-button">-{discount}%</span>
      </h3>
    </section>
  );
};

export default Card;
