import React from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import CartCard from "../components/Cart/CartCard";
import "../pageStyles/Cart.css";

const Cart = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="cart-wrapper">
        <div>
          <h2 className="cart-h2" style={{ marginLeft: "20px" }}>
            Твоя корзина
          </h2>
          <div className="cards-wrapper">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div className="checkout">
          <h2 className="cart-h2">Сумма заказа</h2>
          <div className="cart-text-wrapper">
            <p className="cart-p">Сырая сумма</p>{" "}
            <h3 className="cart-h3">$565</h3>
          </div>
          <div className="cart-text-wrapper">
            <p className="cart-p">Скидка(20%)</p>{" "}
            <h3 className="cart-h3">-$113</h3>
          </div>
          <div className="cart-text-wrapper">
            <p className="cart-p">Доставка</p> <h3 className="cart-h3">$15</h3>
          </div>
          <div className="cart-text-wrapper">
            <p className="cart-p-checkout">Сумма</p>{" "}
            <h3 className="cart-h3">$463</h3>
          </div>
          <form action="" className="cart-form">
            <input
              type="text"
              placeholder="Добавить промокод"
              className="cart-input"
            />
            <button className="cart-form-button">Применить</button>
          </form>
          <button className="cart-button">Перейти к оплате</button>
        </div>
      </section>

      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default Cart;
