import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, removeTodo, updateTodo } from "../actions/actionsCreators";

import Todo from "../components/Todo";
// import "../pages/Home.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  handleRemoveTodo(id) {
    this.props.removeTodo(id);
  }
  handleUpdateTodo(id, newTodoTitle, dateCompletedTod) {
    this.props.updateTodo(id, newTodoTitle, dateCompletedTod);
  }
  /*
 * TODO:
 мое новое расширение
  */

  render() {
    const todos = Object.values(this.props.todos);

    return (
      <div className="wrap-todos">
        {todos &&
          todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={this.handleRemoveTodo.bind(this)}
              updateTodo={this.handleUpdateTodo.bind(this)}
            />
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todo.byId
  };
};
export default connect(
  mapStateToProps,
  { fetchTodos, removeTodo, updateTodo }
)(Home);
