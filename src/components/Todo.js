import React from "react";
import { Card, Button } from "antd";

import "./Todo.css";

const Todo = ({ todos, removeTodo }) => {
  const renderTodo = (item, removeTodo) => {
    const { id, date, titleTodo, description } = item;
    return (
      <Card
        className="todo-item"
        key={id}
        title={titleTodo}
        extra={
          <Button
            style={{ marginLeft: 20 }}
            type="danger"
            icon="delete"
            onClick={() => removeTodo(id)}
          />
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
    <div className="wrap-todos">
      {todos && todos.map(item => renderTodo(item, removeTodo))}
    </div>
  );
};

export default Todo;
