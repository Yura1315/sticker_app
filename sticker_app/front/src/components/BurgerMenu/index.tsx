import React from 'react';
import style from './BurgerMenu.module.scss';

type BurgerMenuPropsType = {
  setActiveBurger: () => void;
  activeBurger: boolean;
};

const BurgerMenu = ({ setActiveBurger, activeBurger }: BurgerMenuPropsType) => {
  return (
    <div className={style.hamburger_lines} onClick={setActiveBurger}>
      <span
        className={
          activeBurger
            ? `${style.line} ${style.line1} ${style.open_line1}`
            : `${style.line} ${style.line1}`
        }></span>
      <span
        className={
          activeBurger
            ? `${style.line} ${style.line2} ${style.open_line2}`
            : `${style.line} ${style.line2}`
        }></span>
      <span
        className={
          activeBurger
            ? `${style.line} ${style.line3} ${style.open_line3}`
            : `${style.line} ${style.line3}`
        }></span>
    </div>
  );
};

export default BurgerMenu;
