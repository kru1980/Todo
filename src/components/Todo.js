import React from "react";
import { Button, Icon } from "antd";
import { Link } from "react-router-dom";

import "./Todo.css";
const R = require("ramda");

const Todo = ({ todos, removeTodo }) => {
  const renderTodo = (item, removeTodo) => {
    const { id, date, titleTodo } = item;
    const smallDescription = R.take(40, titleTodo);
    const titleTodoLength = titleTodo.length;

    const bigText = () => {
      return (
        <div>
          {`${smallDescription}...`}
          <Link to="/">
            <Icon type="arrow-right" theme="outlined" />
          </Link>
        </div>
      );
    };
    return (
      <div className="todoItem" key={id}>
        <div className="todoItem-text">
          {/* {titleTodoLength < 20 ? titleTodo : bigText()} */}
          {titleTodo}
          <h6>
            Date create:
            {date}
          </h6>
        </div>
        <div className="todoItem-footer">
          <Button type="danger" onClick={() => removeTodo(id)}>
            удалить
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div className="wrap-todos">
      {todos && todos.map(item => renderTodo(item, removeTodo))}
    </div>
  );
};

export default Todo;
