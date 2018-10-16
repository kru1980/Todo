import React from "react";
import { Button, Icon } from "antd";
import { Link } from "react-router-dom";

import "./Todo.css";
const R = require("ramda");

// import React, { Component } from "react";
// import PropTypes from "prop-types";

// export default class Todo extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

const Todo = ({ todos, removeTodo, updateTodo }) => {
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
            <Icon type="delete" theme="outlined" />
          </Button>
          <Button type="danger" onClick={() => updateTodo(id)}>
            <Icon type="edit" theme="outlined" />
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
