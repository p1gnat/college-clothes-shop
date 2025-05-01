import React, { useEffect, useState } from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import ImageSelector from "../components/ShopItem/ImageSelector";
import { useParams } from "react-router";
import axios from "axios";

import "../pageStyles/ShopItem.css";

const ShopItem = () => {
  const itemId = useParams();
  console.log(itemId);

  const [cloth, setCloth] = useState({});

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        `http://localhost:5000/api/clothes/${itemId.id}`
      );
      setCloth(data.data);
    })();
  }, [itemId.id]);

  useEffect(() => {
    console.log(cloth);
  }, [cloth]);

  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      {cloth._id ? (
        <div className="main-wrap">
          <ImageSelector
            img={`http://localhost:5000${cloth.image}`}
          ></ImageSelector>
          <section>
            <div className="for-gaps">
              <h2 className="title">{cloth.name}</h2>
              <p className="rating">
                {cloth.rating}
                <span className="rating-bold">/5.0</span>
              </p>
              <h3 className="price">${cloth.price}</h3>
              <p className="description">{cloth.description}</p>
            </div>
            <div className="sizes">
              <p>Размеры:</p>
              <div className="sizes-wrapper">
                <button className="size-buttons">S</button>
                <button className="size-buttons">M</button>
                <button className="size-buttons">L</button>
                <button className="size-buttons">XL</button>
              </div>
            </div>
            <div className="solo-item-buttons">
              <div className="full-button">
                <button className="plus-minus">-</button>
                <h2 className="counter">1</h2>
                <button className="plus-minus">+</button>
              </div>
              <div>
                <button className="final-button">Добавить в корзину</button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>Loading...</>
      )}
      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default ShopItem;
