import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <article className="main">
      <section>
        <section>
          <h1>Найди одежду и подбери свой стиль</h1>
          <p>
            Ознакомьтесь с нашим разнообразным ассортиментом тщательно
            изготовленных изделий, призванных подчеркнуть вашу индивидуальность
            и удовлетворить ваше чувство стиля.
          </p>
          <button>Начать покупки</button>
        </section>
        <section className="numbers">
          <div>
            <h2>50+</h2>
            <p>Международных брэндов</p>
          </div>
          <div>
            <h2>1.000+</h2>
            <p>Качественных продуктов</p>
          </div>
          <div>
            <h2>12.000+</h2>
            <p>Радостных покупателей</p>
          </div>
        </section>
      </section>
      <section>
        <img src="./main/Star1.svg" alt="Звёздочка" className="star1" />
        <img src="./main/Star2.svg" alt="Звёздочка" className="star2" />
        <img src="./main/Main.png" alt="Модели" className="main-img" />
      </section>
    </article>
  );
};

export default Main;
