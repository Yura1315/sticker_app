import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSearch from '../FormSearch';
import logo from '../../../assets/img/logo.svg';
import style from './Header.module.scss';
import AccountNavigate from '../../AccountNavigate';
import MobileMenu from '../../MobileMenu';
import { Switch } from 'antd';
import { ThemeSlice } from '../../../store/reducers/ThemeSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [visibleAccount, setVisibleAccount] = useState(false);
  const { checked } = useAppSelector((state) => state.themeReducer);
  const { changeTheme } = ThemeSlice.actions;
  const dispatch = useAppDispatch();

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
        <Switch
          className={style.theme}
          checkedChildren="light"
          unCheckedChildren="dark"
          onClick={() => dispatch(changeTheme())}
        />
      </div>
    </header>
  );
};

export default Header;
