import React from 'react';
import { Table } from 'antd';

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const AntTable: React.FC = () => {
  const data: DataType[] = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London' },
    { key: '3', name: 'Joe Black', age: 22, address: 'Sydney' },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h3>Static Ant Table (Library Component)</h3>
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    </div>
  );
};

export default AntTable;
