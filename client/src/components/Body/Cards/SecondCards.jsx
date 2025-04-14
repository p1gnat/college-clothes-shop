import React from "react";

import "./SecondCards.css";
import Card from "../Card";
import CardDiscount from "../CardDiscount";

const SecondCards = () => {
  return (
    <section className="cards">
      <CardDiscount
        img="./main/cards/topic.png"
        h3="Топик"
        rating="5.0"
        price="212"
        oldPrice="232"
        discount="20"
      ></CardDiscount>
      <Card
        img="./main/cards/second-topic.png"
        h3="Короткая кофта"
        rating="4.0"
        price="180"
      ></Card>
      <Card
        img="./main/cards/T-shirt.png"
        h3="Футболка"
        rating="3.0"
        price="180"
      ></Card>
      <Card
        img="./main/cards/trousers.png"
        h3="Узкие джинцы"
        rating="4.5"
        price="180"
      ></Card>
    </section>
  );
};

export default SecondCards;
