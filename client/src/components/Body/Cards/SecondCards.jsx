import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/carousel/styles.css";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";
import "./SecondCards.css";

const SecondCards = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://college-clothes-shop-backend.onrender.com";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/api/clothes`);
        console.log(res.data);
        setClothes([res.data[4], res.data[5], res.data[6], res.data[7]]);
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

export default SecondCards;

// return (
//   <section className="cards">
//     {clothes.length > 0 ? (
//       <>
//         <Card
//           img={http://localhost:5000${clothes[4].image}}
//           h3={clothes[4].name}
//           rating={clothes[4].rating}
//           price={clothes[4].price}
//           id={clothes[4]._id}
//         ></Card>
//         <Card
//           img={http://localhost:5000${clothes[5].image}}
//           h3={clothes[5].name}
//           rating={clothes[5].rating}
//           price={clothes[5].price}
//           id={clothes[5]._id}
//         ></Card>
//         <Card
//           img={http://localhost:5000${clothes[6].image}}
//           h3={clothes[6].name}
//           rating={clothes[6].rating}
//           price={clothes[6].price}
//           id={clothes[6]._id}
//         ></Card>
//         <Card
//           img={http://localhost:5000${clothes[7].image}}
//           h3={clothes[7].name}
//           rating={clothes[7].rating}
//           price={clothes[7].price}
//           id={clothes[7]._id}
//         ></Card>
//       </>
//     ) : (
//       <>Загрузка...</>
//     )}
//   </section>
// );
