import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSearch from '../FormSearch';
import logo from '../../../assets/img/logo.svg';
import style from './Header.module.scss';
import AccountNavigate from '../../AccountNavigate';
import MobileMenu from '../../MobileMenu';
import { Switch } from 'antd';

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [visibleAccount, setVisibleAccount] = useState(false);
  const handlerAccount = () => {
    if (activeBurger) {
      setActiveBurger(false);
      setVisibleAccount(true);
    } else {
      document.body.classList.toggle('lock');
      setVisibleAccount(!visibleAccount);
    }
  };

  const handlerBurger = () => {
    if (visibleAccount) {
      setVisibleAccount(false);
      document.body.classList.add('lock');
      setActiveBurger(true);
    } else {
      document.body.classList.toggle('lock');
      setActiveBurger(!activeBurger);
    }
  };
  return (
    <header className={style.header}>
      <div className={style.header_wrap}>
        <Link className={style.header_logo} to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </Link>
        <FormSearch />
        <Link className={style.header_link} to="/dashboard-add">
          Подать объявление
        </Link>
        <AccountNavigate
          handler={handlerBurger}
          activeBurger={activeBurger}
          handlerAccount={handlerAccount}
          visibleAccount={visibleAccount}
        />
        <MobileMenu activeBurger={activeBurger} />
        <Switch className={style.theme} checkedChildren="light" unCheckedChildren="dark" />
      </div>
    </header>
  );
};

export default Header;
