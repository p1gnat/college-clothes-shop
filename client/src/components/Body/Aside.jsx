import React from "react";
import { useState } from "react";

import "./Aside.css";

const Aside = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <aside className="aside">
      <h1 className="h1">Следи за обновлениями вместе с почтой</h1>
      <form className="form" action="">
        <img
          className="img"
          src="./main/footer/email.svg"
          alt="Эмейл"
          style={{ visibility: isActive ? "visible" : "hidden" }}
        />
        <input
          className="input"
          type="text"
          placeholder="Введите свою эллектронную почту..."
          onFocus={() => setIsActive(false)}
          onBlur={() => setIsActive(true)}
        />
        <button className="button">Подписаться на рассылку</button>
      </form>
    </aside>
  );
};

export default Aside;
