import React from "react";
import { useState } from "react";
import "./TopHeader.css";

const TopHeader = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {open ? (
        <aside className="topHeader-aside">
          <p className="p">
            Зарегистрируйтесь и получите скидку 20% на первый заказ.
            <span>
              <a href="">Зарегистрируйтесь сейчас</a>
            </span>
          </p>
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
