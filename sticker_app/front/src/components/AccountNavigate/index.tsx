import { LockOutlined } from '@ant-design/icons';
import React from 'react';
import HoverMenu from '../HoverMenu';
import BurgerMenu from '../BurgerMenu';
import style from './AccountNavigate.module.scss';
import { useAppSelector } from '../../hooks/redux';

type AccountNavigatePropsType = {
  handler: () => void;
  handlerAccount: () => void;
  activeBurger: boolean;
  visibleAccount: boolean;
};

const AccountNavigate = ({
  handler,
  activeBurger,
  handlerAccount,
  visibleAccount,
}: AccountNavigatePropsType) => {
  const { checked } = useAppSelector((state) => state.theme);
  return (
    <>
      <div className={style.mobile_user_info}>
        <LockOutlined
          className={checked ? `${style.lock_active} ${style.lock_dark}` : `${style.lock_active}`}
          onClick={handlerAccount}
        />
        <HoverMenu visibleAccount={visibleAccount} />
      </div>
      <BurgerMenu setActiveBurger={handler} activeBurger={activeBurger} />
      <div className={style.user_info_wrap}>
        <svg
          className={
            checked ? `${style.user_info_svg} ${style.dark_theme}` : `${style.user_info_svg}`
          }
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <span className={style.user_info_text}>Войти</span>
        <HoverMenu />
      </div>
    </>
  );
};

export default AccountNavigate;
