import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

import "./SecondCards.css";

const SecondCards = () => {
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
            img={`http://localhost:5000${clothes[4].image}`}
            h3={clothes[4].name}
            rating={clothes[4].rating}
            price={clothes[4].price}
            id={clothes[4]._id}
          ></Card>
          <Card
            img={`http://localhost:5000${clothes[5].image}`}
            h3={clothes[5].name}
            rating={clothes[5].rating}
            price={clothes[5].price}
            id={clothes[5]._id}
          ></Card>
          <Card
            img={`http://localhost:5000${clothes[6].image}`}
            h3={clothes[6].name}
            rating={clothes[6].rating}
            price={clothes[6].price}
            id={clothes[6]._id}
          ></Card>
          <Card
            img={`http://localhost:5000${clothes[7].image}`}
            h3={clothes[7].name}
            rating={clothes[7].rating}
            price={clothes[7].price}
            id={clothes[7]._id}
          ></Card>
        </>
      ) : (
        <>Загрузка...</>
      )}
    </section>
  );
};

export default SecondCards;
