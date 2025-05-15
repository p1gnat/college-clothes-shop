import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router";
import { useStore } from "../Store/store";

const Header = () => {
  const maxWidth = document.documentElement.clientWidth;

  const [burger, setBurger] = useState(false);
  const products = useStore((state) => state.products);

  return (
    <header>
      <nav>
        {maxWidth <= 800 ? (
          <img
            src="/header/burger.svg"
            alt="открыть меню"
            className="image-burger"
            onClick={() => {
              setBurger(!burger);
            }}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <></>
        )}

        <h2 style={{ cursor: "pointer" }}>
          <NavLink
            to="/main"
            style={{ textDecoration: "none", color: "black" }}
          >
            COLLEGE-IGN
          </NavLink>
        </h2>
        {maxWidth <= 800 ? (
          <></>
        ) : (
          <>
            <div className="navigation-header">
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
          </>
        )}

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
          <NavLink
            to="/login
          "
          >
            <img src="/header/Profile.svg" alt="Профиль" />
          </NavLink>
        </div>
      </nav>
      {maxWidth <= 800 && burger ? (
        <>
          <div className="navigation-header-new">
            <NavLink className="p-navlink-new" to="/shop">
              Магазин
            </NavLink>
            <NavLink className="p-navlink-new" to="/shop">
              Скидки
            </NavLink>
            <NavLink className="p-navlink-new" to="/shop">
              Новые
            </NavLink>
            <NavLink className="p-navlink-new" to="/shop">
              Брэнды
            </NavLink>
          </div>
        </>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
