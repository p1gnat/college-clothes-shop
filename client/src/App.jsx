import "./App.css";
import Aside from "./components/Body/Aside";

import Cards from "./components/Body/Cards/Cards";
import SecondCards from "./components/Body/Cards/SecondCards";
import Line from "./components/Body/Line";
import Main from "./components/Body/Main";
import Header from "./components/Headers/Header";
import TopHeader from "./components/Headers/TopHeader";

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
          <button className="card-button">Смотреть все</button>
        </article>
        <article className="card2-article">
          <h2 className="card-h2">Новые поступления</h2>
          <SecondCards />
          <button className="card-button">Смотреть все</button>
        </article>

        <Aside />
        <footer>
          <article>
            <h1></h1>
            <p></p>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </article>
          <nav>
            <section>
              <h3>Компания</h3>
              <p>О компании</p>
              <p>Обновления</p>
              <p>Работы</p>
              <p>Карьера</p>
            </section>
            <section>
              <h3>Акаунт</h3>
              <p>Акаунт</p>
              <p>Управлять доставками</p>
              <p>Заказы</p>
              <p>Оплаты и чеки</p>
            </section>
          </nav>
          <section>
            <span></span>
            <div>
              <p>
                <span>college-ign</span> © 2000-2023, Все права подтверждены
              </p>
            </div>
            <div>
              <img src="" alt="Visa" />
              <img src="" alt="Mastercard" />
              <img src="" alt="Paypal" />
              <img src="" alt="Apple pay" />
              <img src="" alt="Google pay" />
            </div>
          </section>
        </footer>
      </main>
    </>
  );
}

export default App;
