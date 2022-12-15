import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import style from './MobileMenu.module.scss';

type MobileMenuPropsType = {
  activeBurger: boolean;
};

const MobileMenu = ({ activeBurger }: MobileMenuPropsType) => {
  const { checked } = useAppSelector((state) => state.themeReducer);
  return (
    <div
      style={checked ? { backgroundColor: 'rgb(26, 30, 35)' } : { backgroundColor: '' }}
      className={
        activeBurger
          ? `${style.category_menu} ${style.category_menu_active}`
          : `${style.category_menu}`
      }>
      <div className={style.category_menu_wrap}>
        <Link className={style.create_ads} to="/dashboard-add">
          Подать объявление
        </Link>
        <ul className={style.category_list}>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Вся лента
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Автомобили
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Аксессуары
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Мебель
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Одежда
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Спорт
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Техника
          </Link>
          <Link
            className={
              checked
                ? `${style.category_link} ${style.category_link_dark}`
                : `${style.category_link}`
            }
            to="frfr">
            Товары для дома
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
