import React from 'react';
import {Link} from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <div className="page-header__wrapper">
            <div className="page-header__logo logo">
              <a href="" className="logo__link">
                <div className="logo__wrapper">
                  <img src="./img/logo-icon.svg" alt="Лого" className="logo__image" width="28" height="25"/>
                  <p className="logo__text">ЛИГА Банк</p>
                </div>
              </a>
            </div>
            <nav className="page-menu">
              <ul className="page-menu__list">
                <li className="page-menu__item">
                  <a href="" className="page-menu__link">Услуги</a>
                </li>
                <li className="page-menu__item">
                  <a href="" className="page-menu__link">Рассчитать кредит</a>
                </li>
                <li className="page-menu__item">
                  <a href="" className="page-menu__link page-menu__link--active">Конвертер валют</a>
                </li>
                <li className="page-menu__item">
                  <a href="" className="page-menu__link">Контакты</a>
                </li>
                <li className="page-menu__item">
                  <a href="" className="page-menu__link">Задать вопрос</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <img src="./img/login-icon.svg" alt="Иконка входа" className="user-block__icon" width="20" height="22"/>
              <Link to="/login" className="user-block__link">Войти в Интернет-банк</Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page-main">
        <div className="container">
          <section className="page-main__header main-header">
            <div className="main-header__info">
              <h1 className="main-header__title">Лига Банк</h1>
              <p className="main-header__text">Кредиты на любой случай</p>
              <button className="main-header__button button">Рассчитать кредит</button>
            </div>
            <div className="main-header__image">
              <span className="main-header__card main-header__card--white"></span>
              <span className="main-header__card main-header__card--black"></span>
            </div>
          </section>
          <section className="page-main__converter converter">
            <h2 className="converter-title">Конвертер валют</h2>
            <form action="#" className="converter-form">
              <fieldset className="converter-form__have">
                <legend className="converter-form__legend">У меня есть</legend>
                <div className="convert-form__field">
                  <input type="number" className="converter-form__input"/>
                  <select name="currancy" className="converter-form__select">
                    <option value="RUB" className="converter-form__choice">RUB</option>
                    <option value="USD" className="converter-form__choice">USD</option>
                    <option value="EUR" className="converter-form__choice">EUR</option>
                    <option value="GBR" className="converter-form__choice">GBR</option>
                    <option value="CNY" className="converter-form__choice">CNY</option>
                  </select>
                </div>
              </fieldset>
              <div className="converter-form__image">
                <span className="converter-form__icon converter-form__icon--left"></span>
                <span className="converter-form__icon converter-form__icon--right"></span>
              </div>
              <fieldset className="converter-form__get">
                <legend className="converter-form__legend">Хочу приобрести</legend>
                <div className="convert-form__field">
                  <input type="number" className="converter-form__input"/>
                  <select name="currancy" className="converter-form__select">
                    <option value="USD" className="converter-form__choice">USD</option>
                    <option value="RUB" className="converter-form__choice">RUB</option>
                    <option value="EUR" className="converter-form__choice">EUR</option>
                    <option value="GBR" className="converter-form__choice">GBR</option>
                    <option value="CNY" className="converter-form__choice">CNY</option>
                  </select>
                </div>
              </fieldset>
              <div className="converter-form__calendar">
                <input type="text" className="converter-form__input"/>
              </div>
              <button type="submit" className="converter-form__submit button">Сохранить результат</button>
            </form>
          </section>
          <section className="page-main__history history-data">
            <div className="history-data__wrapper">
              <h2 className="history-data__title">История конвертация</h2>
              <div className="history-data__board">
                <div className="history-data__column history-data__column--left">
                  <ul className="history-data__list">
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <span className="history-data__line"></span>
                <div className="history-data__column history-data__column--right">
                  <ul className="history-data__list">
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                    <li className="history-data__item">
                      <p className="history-data__date">25.11.2020</p>
                      <p className="history-data__change">1000
                        <span className="history-data__currency">RUB</span>
                      </p>
                      <span className="history-data__icon"></span>
                      <p className="history-data__got">13,1234
                        <span className="history-data__currency">USD</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <button className="history-data__reset button">Очистить историю</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="page-footer">
        <div className="container">
          <div className="page-footer__wrapper">
            <div className="page-footer__address address">
              <div className="address__logo logo">
                <a href="" className="logo__link">
                  <div className="logo__wrapper">
                    <img src="./img/logo-icon.svg" alt="Лого" className="logo__image" width="28" height="25"/>
                    <p className="logo__text">ЛИГА Банк</p>
                  </div>
                </a>
              </div>
              <p className="address__text">
                150015, г. Москва, ул. Московская, д. 32<br /> Генеральная лицензия Банка России №1050<br /> Ⓒ Лига Банк, 2019
              </p>
            </div>
            <div className="page-footer__menu">
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <a href="" className="page-footer__link">Услуги</a>
                </li>
                <li className="page-footer__item">
                  <a href="" className="page-footer__link">Рассчитать кредит</a>
                </li>
                <li className="page-footer__item">
                  <a href="" className="page-footer__link">Контакты</a>
                </li>
                <li className="page-footer__item">
                  <a href="" className="page-footer__link">Задать вопрос</a>
                </li>
              </ul>
            </div>
            <div className="page-footer__cellphone phone">
              <p className="phone__number">
                <a href="tel:*0904" className="phone__link">*0904</a>
              </p>
              <p className="phone__info">Бесплатно для абонентов<br /> МТС, Билайн, Мегафон, Теле2</p>
            </div>
            <div className="page-footer__phone phone">
              <p className="phone__number">
                <a href="tel:8 800 111 22 33" className="phone__link">8 800 111 22 33</a>
              </p>
              <p className="phone__info">Бесплатный для всех<br /> городов России</p>
            </div>
            <div className="page-footer__social social">
              <ul className="social__list">
                <li className="social__item">
                  <a href="" className="social__link">
                    <img src="./img/fb-icon.svg" alt="FB" className="social__icon" width="9" height="16"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link">
                    <img src="./img/inst-icon.svg" alt="Instagram" className="social__icon" width="16" height="16"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link">
                    <img src="./img/twiter-icon.svg" alt="Twiter" className="social__icon" width="16" height="13"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link">
                    <img src="./img/youtube-icon.svg" alt="Youtube" className="social__icon" width="16" height="13"/>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
