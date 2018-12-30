import React from "react";
import moment from "moment";
import { Table } from "antd";
import * as R from "ramda";

const TableHOC = ({ todos }) => {
  const headerTable = (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Главная страница, на которой представленны задачи всех пользователей,
        без возможности редактирования
      </h3>
    </div>
  );
  const columns = [
    {
      title: "Название задачи",
      dataIndex: "title",
      render: text => `${text.length > 60 ? `${R.take(60)(text)}...` : text}`,
      sorter: (a, b) => a.title.length - b.title.length
    },
    {
      title: "Автор",
      dataIndex: "displayName",
      width: 120,
      sorter: (a, b) => a.displayName.length - b.displayName.length
    },
    {
      title: "Дата выполнения задачи",
      dataIndex: "datePicker",
      sorter: (a, b) => a.datePicker - b.datePicker
    },
    {
      title: "Дата создания задачи",
      dataIndex: "timeCreatedTodo",
      defaultSortOrder: "descend",
      render: text => moment(text).calendar(),
      sorter: (a, b) => a.timeCreatedTodo - b.timeCreatedTodo
    },
    {
      title: "Просрочено время",
      key: "lastTime",
      render: record => {
        if (moment(Date.now()).format("LL") > record.dateTodoCompleted) {
          return "Время просроченно";
        } else {
          return "Время не просрочено";
        }
      }
    }
  ];

  function onChange(pagination, filters, sorter) {
    console.log("params", pagination, filters, sorter);
  }

  return (
    <div>
      <Table
        bordered
        columns={columns}
        dataSource={todos}
        onChange={onChange}
        title={() => headerTable}
        rowKey={todo => todo.id}
      />
    </div>
  );
};

export default TableHOC;
