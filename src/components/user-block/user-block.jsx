import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const UserBlock = () => {
  const {authorizationStatus, user} = useSelector((state) => state.USER);

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={AppRoute.CONVERTER}>
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>

        <Link to="#" className="user-block__link">Log out</Link>
      </div>
    );
  }

  return (
    <div className="user-block">
      <img src="./img/login-icon.svg" alt="Иконка входа" className="user-block__icon" width="20" height="22"/>
      <Link to="/login" className="user-block__link">Войти в Интернет-банк</Link>
    </div>
  );
};

export default UserBlock;
