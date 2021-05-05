import React from 'react';
import MainHeader from "../main-header/main-header";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeMenu} from "../../store/actions";
import {MENU_TYPE} from "../../const";

const ErrorBody = () => {
  const dispatch = useDispatch();

  return (
    <main className="page-main">
      <div className="container">
        <MainHeader />

        <section className="page-main__error error">
          <div className="container">
            <div className="error__wrapper">
              <h1 className="error__text">404. Page not found</h1>
              <Link className="error__link"
                to="/"
                onClick={() => {
                  dispatch(changeMenu(MENU_TYPE.CONVERTER));
                }}
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ErrorBody;
