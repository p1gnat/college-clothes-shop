import React from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import "../pageStyles/ShopItem.css";
import ImageSelector from "../components/ShopItem/ImageSelector";

const ShopItem = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      <div className="main-wrap">
        <ImageSelector img="/InShop/T-shirt-again.png"></ImageSelector>
        <section>
          <div className="for-gaps">
            <h2 className="title">Футболка One Life</h2>
            <p className="rating">
              4.5<span className="rating-bold">/5.0</span>
            </p>
            <h3 className="price">$260</h3>
            <p className="description">
              Эта графическая футболка, которая идеально подходит для любого
              случая. Изготовленная из мягкой и дышащей ткани, она обеспечивает
              превосходный комфорт и стиль.
            </p>
          </div>
          <div className="sizes">
            <p>Размеры:</p>
            <div className="sizes-wrapper">
              <button className="size-buttons">S</button>
              <button className="size-buttons">M</button>
              <button className="size-buttons">L</button>
              <button className="size-buttons">XL</button>
            </div>
          </div>
          <div className="solo-item-buttons">
            <div className="full-button">
              <button className="plus-minus">-</button>
              <h2 className="counter">1</h2>
              <button className="plus-minus">+</button>
            </div>
            <div>
              <button className="final-button">Добавить в корзину</button>
            </div>
          </div>
        </section>
      </div>
      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default ShopItem;
