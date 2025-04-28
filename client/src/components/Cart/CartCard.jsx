import React from "react";
import "./CartCard.css";

const CartCard = () => {
  return (
    <div className="cart-card-wrapper">
      <img
        src="/InShop/T-shirt-again.png"
        alt="Product's look"
        width="124px"
        height="124px"
      />
      <section>
        <div className="left-right">
          <h2>Футболка</h2>
          <img
            src="/InShop/trash-bin.svg"
            alt="delete"
            style={{ cursor: "pointer" }}
          />
        </div>
        <p>
          Размер:
          <span>L</span>
        </p>
        <div className="left-right">
          <h2 className="cart-card-price">$150</h2>
          <div className="cart-buttons">
            <button className="cart-minus-plus">-</button>
            <h2 className="cart-counter">1</h2>
            <button className="cart-minus-plus">+</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
