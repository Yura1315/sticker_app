import React from 'react';
import { Col, Input } from 'antd';
import style from './FormSearch.module.scss';
import { useAppSelector } from '../../../hooks/redux';

const FormSearch: React.FC = () => {
  const { Search } = Input;
  const { checked } = useAppSelector((state) => state.themeReducer);
  const onSearch = (value: string) => console.log(value);
  return (
    <Col className={style.form_wrap} style={{ maxWidth: '565px', flexGrow: 1 }}>
      <Search
        className={checked ? `${style.search_mobile_dark}` : `${style.search_mobile}`}
        placeholder="search"
        allowClear
        // enterButton="Искать"
        enterButton
        onSearch={onSearch}
        // size="small"
        // loading={true}
        style={{
          borderRadius: '4px',
          width: '100%',
        }}
      />
    </Col>
  );
};

export default FormSearch;
