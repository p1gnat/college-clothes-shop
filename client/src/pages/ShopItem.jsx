import React from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";

const ShopItem = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="side-image-selector">
        <div></div>
      </section>
      <section>
        <img src="" alt="product's look" />
        <div>
          <h2>Футболка с графическим принтом One Life</h2>
          <p></p>
          <h3></h3>
          <p></p>
        </div>
        <span className="line"></span>
        <div>
          <p></p>
          <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <span className="line"></span>
        <div>
          <div>
            <button>-</button>
            <h2></h2>
            <button>+</button>
          </div>
          <div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </section>
      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default ShopItem;
