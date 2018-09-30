import React from "react";
import { Card, Col, Row } from "antd";

const Todo = ({ todos }) => {
  const renderTodo = item => {
    const { id, date, titleTodo, description } = item;
    return (
      <Card
        key={id}
        title={titleTodo}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>{description}</p>
        <h6>
          Date create:
          {date}
        </h6>
      </Card>
    );
  };
  return <div>{todos.map(item => renderTodo(item))}</div>;
};

export default Todo;
