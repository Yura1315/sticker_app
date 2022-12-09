import React from 'react';
import { Col, Input, Space } from 'antd';
import style from './FormSearch.module.scss';

const FormSearch: React.FC = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <Col style={{ maxWidth: '565px', flexGrow: 1 }}>
      <Search
        className={style.search_mobile}
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
