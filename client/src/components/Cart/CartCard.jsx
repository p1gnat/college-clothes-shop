import React, { useEffect, useState } from "react";
import "./CartCard.css";
import { useStore } from "../Store/store";
import axios from "axios";

const CartCard = ({ id }) => {
  const removeProducts = useStore((state) => state.removeProduct);
  const [product, setProduct] = useState([]);
  console.log(id);

  useEffect(() => {
    (async () => {
      const productFetch = await axios.get(
        `http://localhost:5000/api/clothes/${id}`
      );
      setProduct(productFetch.data);
    })();
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="cart-card-wrapper">
      {product.image ? (
        <>
          <img
            src={`http://localhost:5000${product.image}`}
            alt={product.name}
            width="124px"
            height="124px"
          />
          <section>
            <div className="left-right">
              <h2>{product.name}</h2>
              <img
                src="/InShop/trash-bin.svg"
                alt="delete"
                onClick={() => {
                  removeProducts(product._id);
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <p>
              Размер:
              <span>M</span>
            </p>
            <div className="left-right">
              <h2 className="cart-card-price">${product.price}</h2>
              <div className="cart-buttons">
                <button className="cart-minus-plus">-</button>
                <h2 className="cart-counter">1</h2>
                <button className="cart-minus-plus">+</button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartCard;
