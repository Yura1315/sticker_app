import React from 'react';
import style from './Footer.module.scss';
import logoLight from '../../../assets/img/logo.svg';
import logoDark from '../../../assets/img/logo_dark.svg';
import { useAppSelector } from '../../../hooks/redux';

const Footer = () => {
  const { checked } = useAppSelector((state) => state.themeReducer);
  return (
    <footer className={checked ? `${style.footer} ${style.dark_theme}` : `${style.footer}`}>
      <div className={style.footer_wrap}>
        <div className={style.footer_left}>
          <img className={style.logo} src={checked ? logoDark : logoLight} alt="logo" />
          <span className={style.footer_text}>Доска объявлений</span>
        </div>
        <span className={style.footer_text_low}>© ООО «Доска диджитал», 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
