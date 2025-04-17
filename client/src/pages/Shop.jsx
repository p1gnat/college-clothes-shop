import React from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";

const Shop = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="filters">
        <div className="top-filter">
          <h2>Фильтры</h2>
          <img src="" alt="" />
        </div>
        <div>
          <div className="filter">
            <a href="">Футболки</a>
            <img src="" alt="" />
          </div>
          <div className="filter">
            <a href="">Шорты</a>
            <img src="" alt="" />
          </div>
          <div className="filter">
            <a href="">Рубашки</a>
            <img src="" alt="" />
          </div>
          <div className="filter">
            <a href="">Кофты</a>
            <img src="" alt="" />
          </div>
          <div className="filter">
            <a href="">Джинцы</a>
            <img src="" alt="" />
          </div>
          <button>Применить фильтр</button>
        </div>
      </section>
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
      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default Shop;
