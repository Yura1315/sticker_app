import React from 'react';
import { Link } from 'react-router-dom';
import style from './MobileMenu.module.scss';

type MobileMenuPropsType = {
  activeBurger: boolean;
};

const MobileMenu = ({ activeBurger }: MobileMenuPropsType) => {
  return (
    <div
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
          <Link className={style.category_link} to="frfr">
            Вся лента
          </Link>
          <Link className={style.category_link} to="frfr">
            Автомобили
          </Link>
          <Link className={style.category_link} to="frfr">
            Аксессуары
          </Link>
          <Link className={style.category_link} to="frfr">
            Мебель
          </Link>
          <Link className={style.category_link} to="frfr">
            Одежда
          </Link>
          <Link className={style.category_link} to="frfr">
            Спорт
          </Link>
          <Link className={style.category_link} to="frfr">
            Техника
          </Link>
          <Link className={style.category_link} to="frfr">
            Товары для дома
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
