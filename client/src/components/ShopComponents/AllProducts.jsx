import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

import "./AllProducts.css";
import Title from "./Title";

const AllProducts = () => {
  const [clothes, setClothes] = useState([]);

  const maxWidth = document.documentElement.clientWidth;

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:5000/api/clothes");
      setClothes(data.data);
    })();
  }, []);

  return (
    <section className="products">
      {maxWidth <= 1450 ? <></> : <Title />}

      {clothes.length > 0 ? (
        <>
          <section className="card-row">
            <ProductCard
              image={clothes[0].image}
              name={clothes[0].name}
              rating={clothes[0].rating}
              price={clothes[0].price}
              id={clothes[0]._id}
            />
            <ProductCard
              image={clothes[1].image}
              name={clothes[1].name}
              rating={clothes[1].rating}
              price={clothes[1].price}
              id={clothes[1]._id}
            />
            <ProductCard
              image={clothes[2].image}
              name={clothes[2].name}
              rating={clothes[2].rating}
              price={clothes[2].price}
              id={clothes[2]._id}
            />
          </section>
          <section className="card-row">
            <ProductCard
              image={clothes[3].image}
              name={clothes[3].name}
              rating={clothes[3].rating}
              price={clothes[3].price}
              id={clothes[3]._id}
            />
            <ProductCard
              image={clothes[4].image}
              name={clothes[4].name}
              rating={clothes[4].rating}
              price={clothes[4].price}
              id={clothes[4]._id}
            />
            <ProductCard
              image={clothes[5].image}
              name={clothes[5].name}
              rating={clothes[5].rating}
              price={clothes[5].price}
              id={clothes[5]._id}
            />
          </section>
          <section className="card-row">
            <ProductCard
              image={clothes[6].image}
              name={clothes[6].name}
              rating={clothes[6].rating}
              price={clothes[6].price}
              id={clothes[6]._id}
            />
            <ProductCard
              image={clothes[7].image}
              name={clothes[7].name}
              rating={clothes[7].rating}
              price={clothes[7].price}
              id={clothes[7]._id}
            />
            <ProductCard
              image={clothes[8].image}
              name={clothes[8].name}
              rating={clothes[8].rating}
              price={clothes[8].price}
              id={clothes[8]._id}
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
