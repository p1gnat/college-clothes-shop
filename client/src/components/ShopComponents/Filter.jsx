import React, { useState } from "react";
import "./Filter.css";
import Title from "./Title";

const Filter = () => {
  const maxWidth = document.documentElement.clientWidth;
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {maxWidth <= 1450 ? (
        <section className="small-wrapper">
          <Title></Title>
          <img
            src="./InShop/Misc.svg"
            alt="Остальное"
            className="small-filters"
            onClick={() => {
              setIsFilterOpen(!isFilterOpen);
            }}
          />
          {isFilterOpen ? (
            <>
              <div className="all-filters-small">
                <div className="filter-small">
                  <a href="">Футболки</a>
                  <img src="./InShop/arrow-shop.svg" alt="" />
                </div>
                <div className="filter-small">
                  <a href="">Шорты</a>
                  <img src="./InShop/arrow-shop.svg" alt="" />
                </div>
                <div className="filter-small">
                  <a href="">Рубашки</a>
                  <img src="./InShop/arrow-shop.svg" alt="" />
                </div>
                <div className="filter-small">
                  <a href="">Кофты</a>
                  <img src="./InShop/arrow-shop.svg" alt="" />
                </div>
                <div className="filter-small">
                  <a href="">Джинцы</a>
                  <img src="./InShop/arrow-shop.svg" alt="" />
                </div>
                <button className="shop-button-small">Применить фильтр</button>
              </div>
            </>
          ) : (
            <></>
          )}
        </section>
      ) : (
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
      )}
    </>
  );
};

export default Filter;
