import React from "react";
import moment from "moment";
import { Table } from "antd";
import * as R from "ramda";

const TableHOC = ({ todos }) => {
  // Подсмотрел у монтра в видео про линзы. Перебираем массив объектов получаемых с fb базы, далее читаем дату из строки timeCreatedTodo, перезаписываем их данными даты обернутой в функцию moment
  const newData = data => {
    const formatData = timeCreatedTodo => {
      return moment(new Date(timeCreatedTodo)).calendar();
    };
    const timeLens = R.lensProp("timeCreatedTodo");
    return R.map(item => R.over(timeLens, formatData, item))(data);
  };

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
        dataSource={newData(todos)}
        onChange={onChange}
        rowKey={todo => todo.id} //!Че за ебаный ключ
      />
    </div>
  );
};

export default TableHOC;
