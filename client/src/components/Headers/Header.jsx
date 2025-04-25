import React from "react";
import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header>
      <nav>
        <h2 style={{ cursor: "pointer" }}>
          <a href="/main" style={{ textDecoration: "none", color: "black" }}>
            COLLEGE-IGN
          </a>
        </h2>
        <div className="navigation">
          <NavLink className="p-navlink" to="/shop">
            Магазин
          </NavLink>
          <NavLink className="p-navlink" to="/shop">
            Скидки
          </NavLink>
          <NavLink className="p-navlink" to="/shop">
            Новые
          </NavLink>
          <NavLink className="p-navlink" to="/shop">
            Брэнды
          </NavLink>
        </div>
        <div>
          <form action="">
            <img
              src="/header/Search.svg"
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
          <NavLink to="/cart">
            <img src="/header/ShoppingCart.svg" alt="Корзина" />
          </NavLink>
          <NavLink to="/main">
            <img src="/header/Profile.svg" alt="Профиль" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
