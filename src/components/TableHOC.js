import React from "react";
import moment from "moment";
import { Table } from "antd";
import * as R from "ramda";

const TableHOC = ({ todos }) => {
  const headerTable = (
    <div>
      <h4>Всего задач: {todos.length}</h4>
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

  return (
    <div>
      <Table
        columns={columns}
        dataSource={todos}
        rowKey={todo => todo.id}
        pagination={{ pageSize: 9 }}
        size="small"
        title={() => headerTable}
      />
    </div>
  );
};

export default TableHOC;
