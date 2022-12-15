import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import style from './PageWrapper.module.scss';
import { useAppSelector } from '../../../hooks/redux';

const PageWrapper = () => {
  const { checked } = useAppSelector((state) => state.themeReducer);
  return (
    <div className={checked ? `${style.layout} ${style.dark_theme}` : `${style.layout}`}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
