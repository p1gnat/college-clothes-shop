import React from "react";
import "./Title.css";

const Title = () => {
  const maxWidth = document.documentElement.clientWidth;

  return (
    <div className="top-parts">
      <h1 className="product-h1">Магазин:</h1>
      <p className="product-p">Показывается 1-10 из всех продуктов</p>
      {maxWidth <= 1450 ? (
        <></>
      ) : (
        <p className="product-p">
          Сортировка:
          <span className="product-span">Самые популярные ⟱</span>
        </p>
      )}
    </div>
  );
};

export default Title;
