import React from "react";
import "./Card.css";

const Card = ({ img, h3, rating, price }) => {
  return (
    <section className="card">
      <img src={img} alt={h3} width="295px" height="295px" />
      <h3>{h3}</h3>
      <p>
        {rating}
        <span>/5</span>
      </p>
      <h3 className="price">${price}</h3>
    </section>
  );
};

export default Card;
