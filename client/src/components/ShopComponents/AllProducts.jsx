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
            {clothes.map((elem) => (
              <ProductCard
                image={elem.image}
                name={elem.name}
                rating={elem.rating}
                price={elem.price}
                id={elem._id}
              />
            ))}
          </section>
          ;
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
