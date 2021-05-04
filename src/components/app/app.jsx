import React from 'react';
import {Link} from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <div className="page-header__wrapper">
            <div className="logo">
              <img src="./img/logo-icon.svg" alt="Лого" className="logo__image" width="28" height="25"/>
              <p className="logo__text">ЛИГА Банк</p>
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
    </div>
  )
};

export default App;
