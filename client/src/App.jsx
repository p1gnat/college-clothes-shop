import "./App.css";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <header>
        <nav>
          <h2>COLLEGE-IGN</h2>
          <div>
            <p>Магазин</p>
            <p>Скидки</p>
            <p>Новые</p>
            <p>Брэнды</p>
          </div>
          <div>
            <form action="">
              <img src="./header/Search.svg" alt="Искать продукты" />
              <input type="text" />
            </form>
          </div>
          <div>
            <img src="./header/Profile.svg" alt="корзина" />
            <img src="./header/ShoppingCart.svg" alt="профиль" />
          </div>
        </nav>
      </header>
      <main>
        <article>
          <h1></h1>
          <p></p>
          <button></button>
          <section>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </section>
          <img src="" alt="Звёздочка" />
          <img src="" alt="Звёздочка" />
          <img src="" alt="Модели" />
        </article>
        <article>
          <img src="" alt="Versace" />
          <img src="" alt="Zara" />
          <img src="" alt="Gucci" />
          <img src="" alt="Prada" />
          <img src="" alt="Calvin Clein" />
        </article>
        <article>
          <h2>Новые поступления</h2>
          <section>
            <div>
              <img src="" alt="Джинцы" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>$120</h3>
            </div>
          </section>
          <section>
            <div>
              <img src="" alt="Элегантное платье" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>
                $240 <span>$260</span> <span>-20%</span>
              </h3>
            </div>
          </section>
          <section>
            <div>
              <img src="" alt="Кофта" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>$180</h3>
            </div>
          </section>
          <section>
            <div>
              <img src="" alt="Оверсайз кофта" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>
                $130 <span>$160</span> <span>-20%</span>
              </h3>
            </div>
          </section>
          <button>Смотреть все</button>
        </article>
        <article>
          <h2>Новые поступления</h2>
          <section>
            <div>
              <img src="" alt="Джинцы" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>$120</h3>
            </div>
          </section>
          <section>
            <div>
              <img src="" alt="Элегантное платье" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>
                $240 <span>$260</span> <span>-20%</span>
              </h3>
            </div>
          </section>
          <section>
            <div>
              <img src="" alt="Кофта" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>$180</h3>
            </div>
          </section>
          <section>
            <div>
              <img src="" alt="Оверсайз кофта" />
              <h3></h3> <img src="" alt="рейтинг" />
              <p></p>
              <h3>
                $130 <span>$160</span> <span>-20%</span>
              </h3>
            </div>
          </section>
          <button>Смотреть все</button>
        </article>

        <footer>
          <article>
            <h1>Следи за обновлениями вместе с почтой</h1>
            <div>
              <input type="text" />
              <button>Подписаться на рассылку</button>
            </div>
          </article>
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
