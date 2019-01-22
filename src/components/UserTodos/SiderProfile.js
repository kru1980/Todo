import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import CreatedTodoFormDrawer from "./CreatedTodoFormDrawer";
import { createdTodo } from "../../store/actions/projectActions";

import { Divider } from "antd";

const SiderProfile = ({ profile, todos, auth: { uid }, createdTodo }) => {
  const todosUser = todos && R.filter(todo => todo.authorId === uid)(todos);
  const countTodosAll = R.length(todosUser);
  const countTodosCompleted =
    todos &&
    R.compose(
      R.length,
      R.filter(todo => todo.completed)
    )(todosUser);
  const countUnCompletedTodos = countTodosAll - countTodosCompleted;

  return (
    <div>
      <h4>Данные о задачах:</h4>
      <p>Всего задач: {countTodosAll}</p>
      <p>Выполненных: {countTodosCompleted}</p>
      <p>Не выполненных: {countUnCompletedTodos}</p>
      <Divider />
      <CreatedTodoFormDrawer createdTodo={createdTodo} />
    </div>
  );
};

export default connect(
  null,
  { createdTodo }
)(SiderProfile);
