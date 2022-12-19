import React from 'react';
import { Link } from 'react-router-dom';
import style from '../AccountNavigate/AccountNavigate.module.scss';
import exit from '../../assets/img/exit.svg';
import bulletinList from '../../assets/img/bulletinList.svg';
import admin from '../../assets/img/admin.svg';
import { useAppSelector } from '../../hooks/redux';

type HoverMenuPropsType = {
  visibleAccount?: boolean;
};

const HoverMenu = ({ visibleAccount }: HoverMenuPropsType) => {
  const { checked } = useAppSelector((state) => state.theme);

  return (
    <div
      style={checked ? { backgroundColor: 'rgb(26, 30, 35)' } : { backgroundColor: '' }}
      className={
        visibleAccount ? `${style.hover_menu_active} ${style.hover_menu}` : `${style.hover_menu}`
      }>
      <div className={style.hover_menu_wrap}>
        <div className={style.hover_menu_avatar}>PP</div>
        <p className={style.hover_menu_user_name}>Sergey</p>
      </div>
      <div
        style={checked ? { borderTop: '1px solid rgb(43, 49, 59)' } : { borderTop: '' }}
        className={style.hover_menu_link}>
        <img className={style.hover_menu_icon} src={bulletinList} alt="book" />
        <Link className={style.hover_menu_link_item} to="/aa">
          Мои объявления
        </Link>
      </div>
      <div
        style={checked ? { borderTop: '1px solid rgb(43, 49, 59)' } : { borderTop: '' }}
        className={style.hover_menu_link}>
        <img className={style.hover_menu_icon} src={admin} alt="blocks" />
        <Link className={style.hover_menu_link_item} to="/aa">
          Админ Панель
        </Link>
      </div>
      <div
        style={checked ? { borderTop: '1px solid rgb(43, 49, 59)' } : { borderTop: '' }}
        className={style.hover_menu_logout}>
        <img src={exit} alt="exit" />
        <button className={style.hover_menu_logout_btn} type="button">
          Выход
        </button>
      </div>
    </div>
    // <div className={style.hover_menu}>
    //   <div className={style.hover_menu_link}>
    //     <Link className={style.hover_menu_link_item} to="/aa">
    //       Регистрация
    //     </Link>
    //   </div>
    //   <div className={style.hover_menu_link}>
    //     <Link className={style.hover_menu_link_item} to="/aa">
    //       Авторизация
    //     </Link>
    //   </div>
    // </div>
  );
};

export default HoverMenu;
