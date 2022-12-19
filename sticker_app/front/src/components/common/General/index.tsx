import React from 'react';
import { Col, Row, theme } from 'antd';
import style from './General.module.scss';
import { Typography } from 'antd';
import general from '../../../assets/img/general.png';
import { useAppSelector } from '../../../hooks/redux';

const General = () => {
  const { checked } = useAppSelector((state) => state.theme);
  return (
    <Row className={style.wrapper}>
      <Col className={style.general_left} span={12}>
        <Typography.Title
          className={
            checked ? `${style.general_title} ${style.dark_theme}` : `${style.general_title}`
          }
          level={1}>
          Доска объявлений
        </Typography.Title>
        <Typography.Paragraph
          className={
            checked ? `${style.general_text} ${style.dark_theme}` : `${style.general_text}`
          }>
          Находи тысячи разнообразных товаров и услугот продавцов со всей страны. Безопасные
          расчеты. Удобный сервис доставки
        </Typography.Paragraph>
      </Col>
      <Col className={style.general_right} span={12}>
        <img className={style.general_img} src={general} alt="general" />
      </Col>
    </Row>
  );
};

export default General;
