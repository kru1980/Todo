import React from "react";
import { Table } from "antd";

const TableHOC = ({ todos }) => {
  console.log(todos);

  const columns = [
    {
      title: "Название задачи",
      dataIndex: "title",
      sorter: (a, b) => a.title.length - b.title.length
    },
    {
      title: "Автор",
      dataIndex: "displayName",
      sorter: (a, b) => a.displayName.length - b.displayName.length
    },
    {
      title: "Дата выполнения задачи",
      dataIndex: "datePicker",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.datePicker - b.datePicker
    },
    {
      title: "Дата создания задачи",
      dataIndex: "timeCreatedTodo",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.timeCreatedTodo - b.timeCreatedTodo
    }
  ];

  function onChange(pagination, filters, sorter) {
    console.log("params", pagination, filters, sorter);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={todos}
        onChange={onChange}
        rowKey={todo => todo.id} //!Че за ебаный ключ
      />
    </div>
  );
};

export default TableHOC;
