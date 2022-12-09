import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSearch from '../FormSearch';
import logo from '../../../assets/img/logo.svg';
import style from './Header.module.scss';
import AccountNavigate from '../../AccountNavigate';
import MobileMenu from '../../MobileMenu';

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [visibleAccount, setVisibleAccount] = useState(false);
  const handlerAccount = () => {
    setVisibleAccount(!visibleAccount);
  };
  const resetAccount = () => {
    if (visibleAccount) {
      setVisibleAccount(false);
    }
  };
  const resetBurger = () => {
    if (activeBurger) {
      setActiveBurger(false);
    }
  };
  const handlerBurger = () => {
    setActiveBurger(!activeBurger);
  };
  return (
    <header className={style.header} onClick={resetBurger}>
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
        <p className={style.toggle}>toggle</p>
      </div>
    </header>
  );
};

export default Header;
