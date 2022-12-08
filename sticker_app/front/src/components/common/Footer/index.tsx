import React from 'react';
import style from './Footer.module.scss';
import logo from '../../../assets/img/logo.svg';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footer_wrap}>
      <div className={style.footer_left}>
        <img className={style.logo} src={logo} alt="logo" />
        <span className={style.footer_text}>Доска объявлений</span>
      </div>
      <p className={style.footer_text_low}>© ООО «Доска диджитал», 2022</p>
    </div>
  </footer>
);

export default Footer;
