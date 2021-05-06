import React from 'react';
import {Link} from 'react-router-dom';

const UserBlock = () => {
  return (
    <div className="user-block">
      <img src="./img/login-icon.svg" alt="Иконка входа" className="user-block__icon" width="20" height="22"/>
      <Link to="/login" className="user-block__link">Войти в Интернет-банк</Link>
    </div>
  );
};

export default UserBlock;
