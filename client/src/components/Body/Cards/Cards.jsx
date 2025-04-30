import React, { useState } from "react";
import Card from "../Card";

import { useEffect } from "react";
import axios from "axios";
// import "../../../../../server";

import "./Cards.css";

const Cards = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:5000/api/clothes");
      setClothes(data.data);
    })();
  }, []);

  return (
    <section className="cards">
      {clothes.length > 0 ? (
        <>
          <Card
            img={`http://localhost:5000${clothes[0].image}`}
            h3={clothes[0].name}
            rating={clothes[0].rating}
            price={clothes[0].price}
          />
          <Card
            img={`http://localhost:5000${clothes[1].image}`}
            h3={clothes[1].name}
            rating={clothes[1].rating}
            price={clothes[1].price}
          />
          <Card
            img={`http://localhost:5000${clothes[2].image}`}
            h3={clothes[2].name}
            rating={clothes[2].rating}
            price={clothes[2].price}
          />
          <Card
            img={`http://localhost:5000${clothes[3].image}`}
            h3={clothes[3].name}
            rating={clothes[3].rating}
            price={clothes[3].price}
          />
        </>
      ) : (
        <>Загрузка...</>
      )}
    </section>
  );
};

export default Cards;
