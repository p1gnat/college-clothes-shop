import React from "react";
import TopHeader from "../components/Headers/TopHeader";
import Header from "../components/Headers/Header";
import Aside from "../components/Body/Aside";
import Footer from "../components/Footers/Footer";
import Filter from "../components/ShopComponents/Filter";

import "../pageStyles/Shop.css";
import AllProducts from "../components/ShopComponents/AllProducts";

const Shop = () => {
  const maxWidth = document.documentElement.clientWidth;

  return (
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      {maxWidth <= 1450 ? (
        <>
          <div className="main-shop-small">
            <Filter />
            <AllProducts />
          </div>
        </>
      ) : (
        <>
          <div className="main-shop">
            <Filter />
            <AllProducts />
          </div>
        </>
      )}

      <Aside></Aside>
      <Footer></Footer>
    </>
  );
};

export default Shop;
