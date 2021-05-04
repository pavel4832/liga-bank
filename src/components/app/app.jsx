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
        </div>
      </main>
    </div>
  )
};

export default App;
