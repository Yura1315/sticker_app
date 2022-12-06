import { Input, Space } from 'antd';
import React from 'react';
// import { Input, Space } from 'antd';
import 'antd/dist/reset.css';

const FormSearch: React.FC = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <Space direction="horizontal">
      <Search
        placeholder="search"
        allowClear
        enterButton="Искать"
        onSearch={onSearch}
        style={{
          // width: '565px',
          borderRadius: '4px',
        }}
      />
    </Space>
  );
};

export default FormSearch;
