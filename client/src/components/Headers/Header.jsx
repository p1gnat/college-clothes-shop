import React from "react";
import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router";
import { useStore } from "../Store/store";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const products = useStore((state) => state.products);

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
          <NavLink to="/cart" style={{ textDecoration: "none" }}>
            <img src="/header/ShoppingCart.svg" alt="Корзина" />
            {products.length > 0 ? (
              <>
                <span className="span-notification">{products.length}</span>
              </>
            ) : (
              <></>
            )}
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
