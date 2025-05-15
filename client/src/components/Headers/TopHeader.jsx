import React from "react";
import { useState } from "react";
import "./TopHeader.css";
import { NavLink } from "react-router";

const TopHeader = () => {
  const maxWidth = document.documentElement.clientWidth;
  const [open, setOpen] = useState(true);

  return (
    <div>
      {open ? (
        <aside className="topHeader-aside">
          {maxWidth <= 800 ? (
            <p className="p">
              скидка 20%.
              <span>
                <a href="">Зарегистрируйтесь сейчас</a>
              </span>
            </p>
          ) : (
            <p className="p">
              Зарегистрируйтесь и получите скидку 20% на первый заказ.
              <span>
                <NavLink to="/register" className="link">
                  Зарегистрируйтесь сейчас
                </NavLink>
              </span>
            </p>
          )}

          <img
            className=""
            src="/header/Close.svg"
            alt="Close it"
            onClick={() => setOpen(!open)}
          />
        </aside>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TopHeader;
