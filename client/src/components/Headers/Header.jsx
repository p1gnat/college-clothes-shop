import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header>
      <nav>
        <h2>COLLEGE-IGN</h2>
        <div className="navigation">
          <p>Магазин</p>
          <p>Скидки</p>
          <p>Новые</p>
          <p>Брэнды</p>
        </div>
        <div>
          <form action="">
            <img
              src="./header/Search.svg"
              alt="Искать продукты"
              style={{ visibility: isOpen ? "visible" : "hidden" }}
            />
            <input
              type="text"
              onFocus={() => setIsOpen(false)}
              onBlur={() => setIsOpen(true)}
            />
          </form>
        </div>
        <div>
          <img src="./header/ShoppingCart.svg" alt="Корзина" />
          <img src="./header/Profile.svg" alt="Профиль" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
