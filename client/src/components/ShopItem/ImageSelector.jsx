import React, { useState } from "react";
import "./ImageSelector.css";

const ImageSelector = ({ img }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="selector-wrapper">
      <section className="side-image-selector">
        <img
          src={img}
          style={{
            border: selected == 1 ? "2px solid black" : "",
            borderRadius: "20px",
            objectFit: "cover",
          }}
          className="small-image-selector"
          alt="product's look"
          width={"152px"}
          height={"167px"}
          onClick={() => setSelected(1)}
        />
        <img
          src={img}
          style={{
            border: selected == 2 ? "2px solid black" : "",
            borderRadius: "20px",
            objectFit: "cover",
          }}
          className="small-image-selector"
          alt="product's look"
          width={"152px"}
          height={"167px"}
          onClick={() => setSelected(2)}
        />
        <img
          src={img}
          style={{
            border: selected == 3 ? "2px solid black" : "",
            borderRadius: "20px",
            objectFit: "cover",
          }}
          className="small-image-selector"
          alt="product's look"
          width={"152px"}
          height={"167px"}
          onClick={() => setSelected(3)}
        />
      </section>
      <img
        src={img}
        alt="product's look"
        className="big-image-selector"
        width={"444px"}
        height={"530px"}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default ImageSelector;
