import React, { useEffect, useState } from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import ImageSelector from "../components/ShopItem/ImageSelector";
import { useParams } from "react-router";
import axios from "axios";
import { useStore } from "../components/Store/store";

import "../pageStyles/ShopItem.css";

const ShopItem = () => {
  const itemId = useParams();

  const [cloth, setCloth] = useState({});
  const [howMany, setHowMany] = useState(1);
  const [selected, setSelected] = useState("M");

  const products = useStore((state) => state.products);

  const addProducts = useStore((state) => state.addProduct);

  useEffect(() => {
    console.log("Updated products:", products);
  }, [products]);

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
          <section className="single-item-wrapper">
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
                <button
                  className="size-buttons"
                  onClick={() => {
                    setSelected("S");
                  }}
                  style={{
                    backgroundColor: selected == "S" ? "black" : "#F0F0F0",
                    color: selected == "S" ? "white" : "#00000099",
                  }}
                >
                  S
                </button>
                <button
                  className="size-buttons"
                  onClick={() => {
                    setSelected("M");
                  }}
                  style={{
                    backgroundColor: selected == "M" ? "black" : "#F0F0F0",
                    color: selected == "M" ? "white" : "#00000099",
                  }}
                >
                  M
                </button>
                <button
                  className="size-buttons"
                  onClick={() => {
                    setSelected("L");
                  }}
                  style={{
                    backgroundColor: selected == "L" ? "black" : "#F0F0F0",
                    color: selected == "L" ? "white" : "#00000099",
                  }}
                >
                  L
                </button>
                <button
                  className="size-buttons"
                  onClick={() => {
                    setSelected("XL");
                  }}
                  style={{
                    backgroundColor: selected == "XL" ? "black" : "#F0F0F0",
                    color: selected == "XL" ? "white" : "#00000099",
                  }}
                >
                  XL
                </button>
              </div>
            </div>
            <div className="solo-item-buttons">
              <div className="full-button">
                <button
                  className="plus-minus"
                  onClick={() => {
                    if (howMany > 1) {
                      setHowMany(howMany - 1);
                    }
                  }}
                >
                  -
                </button>
                <h2 className="counter">{howMany}</h2>
                <button
                  className="plus-minus"
                  onClick={() => {
                    setHowMany(howMany + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="final-button"
                  onClick={() => {
                    console.log(`size: ${selected} ; number: ${howMany}`);
                    if (!products.includes(itemId.id)) {
                      addProducts({
                        id: itemId.id,
                        size: selected,
                        quantity: howMany,
                      });
                    }
                  }}
                >
                  Добавить в корзину
                </button>
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
