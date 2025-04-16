import React from "react";
import "../pageStyles/NotFound.css";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="main-error">
      <h1 className="h1-error">ERROR 404</h1>
      <p className="p-error">page not found</p>
      <NavLink className="a-error" to="/main">
        Go onto the main page
      </NavLink>
    </div>
  );
};

export default NotFound;
