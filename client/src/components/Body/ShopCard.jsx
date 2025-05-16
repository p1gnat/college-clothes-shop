import React from "react";
import { NavLink } from "react-router";

import "./ShopCard.css";

const ShopCard = ({ img, h3, rating, price, id }) => {
  return (
    <section className="card">
      <NavLink to={`/shop/${id}`}>
        <img
          src={img}
          alt={h3}
          width="295px"
          height="295px"
          className="image-size"
        />
      </NavLink>
      <h3>{h3}</h3>
      <p>
        {rating}
        <span>/5</span>
      </p>
      <h3 className="price">${price}</h3>
    </section>
  );
};

export default ShopCard;
