import React from "react";

const Footer = () => {
  return (
    <footer>
      <article>
        <h1>college-ign</h1>
        <p>
          У нас есть одежда, которая подходит вашему стилю и которую вы с
          гордостью носите. От женской до мужской.
        </p>
        <div>
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
          <img src="./other-logos/payments/visa.png" alt="Visa" />
          <img src="./other-logos/payments/mastercard.png" alt="Mastercard" />
          <img src="./other-logos/payments/paypal.png" alt="Paypal" />
          <img src="./other-logos/payments/applepay.png" alt="Apple pay" />
          <img src="./other-logos/payments/googlepay.png" alt="Google pay" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
