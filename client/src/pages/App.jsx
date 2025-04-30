import "./App.css";
import Aside from "../components/Body/Aside";

import Cards from "../components/Body/Cards/Cards";
import SecondCards from "../components/Body/Cards/SecondCards";
import Line from "../components/Body/Line";
import Main from "../components/Body/Main";
import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";
import TopHeader from "../components/Headers/TopHeader";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <main>
        <Main />
        <Line />
        <article className="card-article">
          <h2 className="card-h2">Новые поступления</h2>
          <Cards />
          <button className="card-button">
            <NavLink
              to="/shop"
              style={{ color: "black", textDecoration: "none" }}
            >
              Смотреть все
            </NavLink>
          </button>
        </article>
        <article className="card2-article">
          <h2 className="card-h2">Новые поступления</h2>
          <SecondCards />
          <button className="card-button">
            <NavLink
              to="/shop"
              style={{ color: "black", textDecoration: "none" }}
            >
              Смотреть все
            </NavLink>
          </button>
        </article>

        <Aside />
        <Footer />
      </main>
    </>
  );
}

export default App;
