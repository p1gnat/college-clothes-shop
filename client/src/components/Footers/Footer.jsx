import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="top">
          <article className="first-left">
            <h2 className="h2">COLLEGE-IGN</h2>
            <p>
              У нас есть одежда, которая подходит вашему стилю и которую вы с
              гордостью носите. От женской до мужской.
            </p>
            <div className="images-top">
              <a
                href="https://github.com/p1gnat/college-clothes-shop"
                target="_blank"
              >
                <img src="./other-logos/twitter.svg" alt="twitter" />
              </a>
              <a
                href="https://github.com/p1gnat/college-clothes-shop"
                target="_blank"
              >
                <img src="./other-logos/facebook.svg" alt="facebook" />
              </a>
              <a
                href="https://github.com/p1gnat/college-clothes-shop"
                target="_blank"
              >
                <img src="./other-logos/instagram.svg" alt="instagram" />
              </a>
              <a
                href="https://github.com/p1gnat/college-clothes-shop"
                target="_blank"
              >
                <img src="./other-logos/github.svg" alt="github" />
              </a>
            </div>
          </article>
          <section className="second-left">
            <h3>Компания</h3>
            <a href="#" target="_blank">
              О компании
            </a>
            <a href="#" target="_blank">
              Обновления
            </a>
            <a href="#" target="_blank">
              Работы
            </a>
            <a href="#" target="_blank">
              Карьера
            </a>
          </section>
          <section className="third-left">
            <h3>Акаунт</h3>
            <a href="#" target="_blank">
              Акаунт
            </a>
            <a href="#" target="_blank">
              Управлять доставками
            </a>
            <a href="#" target="_blank">
              Заказы
            </a>
            <a href="#" target="_blank">
              Оплаты и чеки
            </a>
          </section>
        </div>
        <div className="line"></div>
        <section className="bottom">
          <div>
            <p>
              <span>college-ign</span> © 2000-2023, Все права подтверждены
            </p>
          </div>
          <div>
            <img src="./other-logos/payments/visa.png" alt="Visa" />
            <img src="./other-logos/payments/mastercard.png" alt="Mastercard" />
            <img src="./other-logos/payments/paypal.png" alt="Paypal" />
            <img src="./other-logos/payments/applepay.png" alt="Apple pay" />
            <img src="./other-logos/payments/googlepay.png" alt="Google pay" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
