import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

import "./AllProducts.css";

const AllProducts = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:5000/api/clothes");
      setClothes(data.data);
    })();
  }, []);

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

      {clothes.length > 0 ? (
        <>
          <section className="card-row">
            <ProductCard
              image={clothes[0].image}
              n
              rating={clothes[0].rating}
              price={clothes[0].price}
            />
            <ProductCard
              image={clothes[1].image}
              name={clothes[1].name}
              rating={clothes[1].rating}
              price={clothes[1].price}
            />
            <ProductCard
              image={clothes[2].image}
              name={clothes[2].name}
              rating={clothes[2].rating}
              price={clothes[2].price}
            />
          </section>
          <section className="card-row">
            <ProductCard
              image={clothes[3].image}
              name={clothes[3].name}
              rating={clothes[3].rating}
              price={clothes[3].price}
            />
            <ProductCard
              image={clothes[4].image}
              name={clothes[4].name}
              rating={clothes[4].rating}
              price={clothes[4].price}
            />
            <ProductCard
              image={clothes[5].image}
              name={clothes[5].name}
              rating={clothes[5].rating}
              price={clothes[5].price}
            />
          </section>
          <section className="card-row">
            <ProductCard
              image={clothes[6].image}
              name={clothes[6].name}
              rating={clothes[6].rating}
              price={clothes[6].price}
            />
            <ProductCard
              image={clothes[7].image}
              name={clothes[7].name}
              rating={clothes[7].rating}
              price={clothes[7].price}
            />
            <ProductCard
              image={clothes[8].image}
              name={clothes[8].name}
              rating={clothes[8].rating}
              price={clothes[8].price}
            />
          </section>
        </>
      ) : (
        <></>
      )}

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
