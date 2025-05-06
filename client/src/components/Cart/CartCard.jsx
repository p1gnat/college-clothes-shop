import React, { useEffect, useState } from "react";
import "./CartCard.css";
import { useStore } from "../Store/store";
import axios from "axios";

const CartCard = ({ elem }) => {
  const removeProducts = useStore((state) => state.removeProduct);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const [product, setProduct] = useState([]);
  console.log(elem.id);

  useEffect(() => {
    (async () => {
      const productFetch = await axios.get(
        `http://localhost:5000/api/clothes/${elem.id}`
      );
      setProduct(productFetch.data);
    })();
  }, [elem.id]);

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
                  removeProducts(elem.id, elem.size);
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <p>
              Размер:
              <span>{elem.size}</span>
            </p>
            <div className="left-right">
              <h2 className="cart-card-price">${product.price}</h2>
              <div className="cart-buttons">
                <button
                  className="cart-minus-plus"
                  onClick={() => {
                    updateQuantity(elem.id, elem.size, -1);
                  }}
                >
                  -
                </button>
                <h2 className="cart-counter">{elem.quantity}</h2>
                <button
                  className="cart-minus-plus"
                  onClick={() => {
                    updateQuantity(elem.id, elem.size, 1);
                  }}
                >
                  +
                </button>
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
