import React from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import Filter from "../components/ShopComponents/Filter";

import "../pageStyles/Shop.css";

const Shop = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      <div className="main">
        <Filter />
        <section className="products">
          <div className="top-parts">
            <h1>Отфильтровано:</h1>
            <p>Показывается 1-10 из всех продуктов</p>
            <p>
              Сортировка:
              <span>Самые популярные ⟱</span>
            </p>
          </div>
          <div className="row">
            <section className="card"></section>
            <section className="card"></section>
            <section className="card"></section>
          </div>
          <div className="bottom-parts">
            <button>← Предыдущая</button>
            <section className="pages-counter">
              <button>1</button>
            </section>
            <button>Следующая →</button>
          </div>
        </section>
      </div>
      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default Shop;
