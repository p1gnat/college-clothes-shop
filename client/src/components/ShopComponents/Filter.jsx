import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <section className="filters">
      <div className="top-filter">
        <h2>Фильтры</h2>
        <img src="./InShop/Misc.svg" alt="Остальное" />
      </div>
      <span className="lines"></span>
      <div className="all-filters">
        <div className="filter">
          <a href="">Футболки</a>
          <img src="./InShop/arrow-shop.svg" alt="" />
        </div>
        <div className="filter">
          <a href="">Шорты</a>
          <img src="./InShop/arrow-shop.svg" alt="" />
        </div>
        <div className="filter">
          <a href="">Рубашки</a>
          <img src="./InShop/arrow-shop.svg" alt="" />
        </div>
        <div className="filter">
          <a href="">Кофты</a>
          <img src="./InShop/arrow-shop.svg" alt="" />
        </div>
        <div className="filter">
          <a href="">Джинцы</a>
          <img src="./InShop/arrow-shop.svg" alt="" />
        </div>
        <span className="lines"></span>
        <button className="shop-button">Применить фильтр</button>
      </div>
    </section>
  );
};

export default Filter;
