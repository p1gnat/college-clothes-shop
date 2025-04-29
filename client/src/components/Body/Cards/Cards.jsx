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
      console.log(`../../../../../server${data.data[0].image}`);
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
            img="./main/cards/black-dress.png"
            h3="Элегантное платье"
            rating="3.5"
            price="240"
          />
          <Card
            img="./main/cards/grey-sweater.png"
            h3="Кофта"
            rating="4.5"
            price="180"
          />
          <Card
            img="./main/cards/pink-sweater.png"
            h3="Оверсайз кофта"
            rating="4.5"
            price="130"
          />
        </>
      ) : (
        <>Загрузка...</>
      )}
    </section>
  );
};

export default Cards;
