import React from 'react';
import { Link } from 'react-router-dom';
import FormSearch from '../FormSearch';
import logo from '../../../assets/img/logo.svg';
import style from './Header.module.scss';
import AccountNavigate from '../../AccountNavigate';

const Header = () => (
  <div className={style.header}>
    <div className={style.header_wrap}>
      <Link className={style.header_logo} to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <FormSearch />
      <Link className={style.header_link} to="/dashboard-add">
        Подать объявление
      </Link>
      <AccountNavigate />
      <p className={style.toggle}>toggle</p>
    </div>
  </div>
);

export default Header;
