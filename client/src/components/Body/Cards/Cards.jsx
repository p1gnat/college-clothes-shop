import React from "react";
import Card from "../Card";
import CardDiscount from "../CardDiscount";

import "./Cards.css";

const Cards = () => {
  return (
    <section className="cards">
      <Card img="./main/cards/jeans.png" h3="Джинцы" rating="4.5" price="120" />
      <CardDiscount
        img="./main/cards/black-dress.png"
        h3="Элегантное платье"
        rating="3.5"
        price="240"
        oldPrice="260"
        discount="20"
      />
      <Card
        img="./main/cards/grey-sweater.png"
        h3="Кофта"
        rating="4.5"
        price="180"
      />
      <CardDiscount
        img="./main/cards/pink-sweater.png"
        h3="Оверсайз кофта"
        rating="4.5"
        price="130"
        oldPrice="160"
        discount="20"
      />
    </section>
  );
};

export default Cards;
