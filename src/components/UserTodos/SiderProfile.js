import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import Upload from "./Upload";
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
      <Divider />
      <h4>Данные о пользователе:</h4>
      <p>Имя: {profile && profile.displayName} </p>
      <p>E-mail: {profile && profile.email} </p>
      <p>Статус: {profile && profile.role}</p>
      <Divider />
      <h4>Изменить аватар пользователя:</h4>
      <div>
        <Upload />
      </div>
    </div>
  );
};

export default connect(
  null,
  { createdTodo }
)(SiderProfile);
