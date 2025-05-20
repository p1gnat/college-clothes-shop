import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/carousel/styles.css";
import Card from "../Card";
import { useEffect } from "react";
import axios from "axios";

import "./Cards.css";

const Cards = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://college-clothes-shop-backend.onrender.com";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/api/clothes`);
        console.log(res.data);
        setClothes([res.data[0], res.data[1], res.data[2], res.data[3]]);
      } catch (err) {
        console.error("Failed to fetch clothes", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const smallScreen = useMediaQuery("(max-width: 800px)");

  const slides = clothes.map((item) => (
    <Carousel.Slide key={item._id}>
      <Card
        img={`${url}${item.image}`}
        h3={item.name}
        rating={item.rating}
        price={item.price}
        id={item._id}
      />
    </Carousel.Slide>
  ));

  if (loading) return <>Загрузка...</>;
  if (!clothes.length) return <>Нет товаров</>;

  return (
    <div className="carousel-wrapper">
      <Carousel
        slideSize={smallScreen ? "50%" : "25%"}
        slideGap="md"
        align="start"
        slidesToScroll={smallScreen ? 2 : 4}
        withControls
        withIndicators
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default Cards;
