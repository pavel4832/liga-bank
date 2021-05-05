import React from 'react';
import {useDispatch} from "react-redux";
import {redirectToRoute} from "../../store/actions";
import {AppRoute} from "../../const";

const MainHeader = () => {
  const dispatch = useDispatch();

  return (
    <section className="page-main__header main-header">
      <div className="main-header__info">
        <h1 className="main-header__title">Лига Банк</h1>
        <p className="main-header__text">Кредиты на любой случай</p>
        <button
          className="main-header__button button"
          onClick={() => {
            dispatch(redirectToRoute(AppRoute.LOAN));
          }}
        >
          Рассчитать кредит
        </button>
      </div>
      <div className="main-header__image">
        <span className="main-header__card main-header__card--white"></span>
        <span className="main-header__card main-header__card--black"></span>
      </div>
    </section>
  );
};

export default MainHeader;
