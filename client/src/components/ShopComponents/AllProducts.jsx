import React from "react";
import "./AllProducts.css";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  return (
    <section className="products">
      <div className="top-parts">
        <h1 className="product-h1">Отфильтровано:</h1>
        <p className="product-p">Показывается 1-10 из всех продуктов</p>
        <p className="product-p">
          Сортировка:
          <span className="product-span">Самые популярные ⟱</span>
        </p>
      </div>

      <section className="card-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <section className="card-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <section className="card-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>

      <div className="bottom-parts">
        <button className="shop-button">← Предыдущая</button>
        <section className="pages-counter">
          <button className="shop-number">1</button>
        </section>
        <button className="shop-button">Следующая →</button>
      </div>
    </section>
  );
};

export default AllProducts;
