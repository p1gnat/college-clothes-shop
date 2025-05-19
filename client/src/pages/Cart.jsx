import React, { useEffect, useState } from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import CartCard from "../components/Cart/CartCard";
import { useStore } from "../components/Store/store";
import axios from "axios";

import "../pageStyles/Cart.css";

const Cart = () => {
  const products = useStore((state) => state.products);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const responses = await Promise.all(
          products.map((elem) =>
            axios.get(`http://localhost:5000/api/clothes/${elem.id}`)
          )
        );

        const total = responses.reduce((acc, response, index) => {
          const price = response.data.price;
          const quantity = products[index].quantity || 1;
          return acc + price * quantity;
        }, 0);

        setPrice(total);
      } catch (err) {
        console.error("Failed to fetch product prices:", err);
      }
    };

    if (products.length > 0) {
      fetchPrices();
    } else {
      setPrice(0); // reset if cart is empty
    }
  }, [products]);

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
            {products.length > 0 ? (
              products.map((elem) => {
                return <CartCard elem={elem} key={elem} />;
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="checkout">
          <h2 className="cart-h2">Сумма заказа</h2>
          <div className="cart-text-wrapper">
            <p className="cart-p">Сырая сумма</p>{" "}
            <h3 className="cart-h3">${price}</h3>
          </div>
          <div className="cart-text-wrapper">
            <p className="cart-p">Доставка</p> <h3 className="cart-h3">$15</h3>
          </div>
          <div className="cart-text-wrapper">
            <p className="cart-p-checkout">Сумма</p>{" "}
            <h3 className="cart-h3">${price + 15}</h3>
          </div>
          <form action="" className="cart-form">
            <input
              type="text"
              placeholder="Добавить промокод"
              className="cart-input"
            />
            <button type="button" className="cart-form-button">
              Применить
            </button>
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
