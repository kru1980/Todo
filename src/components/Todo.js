import React from "react";
import { Card, Col, Row } from "antd";

import "./Todo.css";

const Todo = ({ todos }) => {
  const renderTodo = item => {
    const { id, date, titleTodo, description } = item;
    return (
      <Card
        className="todo-item"
        key={id}
        title={titleTodo}
        extra={
          <a style={{ marginLeft: 20 }} href="#">
            Далее
          </a>
        }
      >
        <p>{description}</p>
        <h6>
          Date create:
          {date}
        </h6>
      </Card>
    );
  };
  return (
    <div className="wrap-todos">{todos.map(item => renderTodo(item))}</div>
  );
};

export default Todo;
