import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, removeTodo } from "../actions/actionsCreators";

import Todo from "../components/Todo";

class Home extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  handleRemoveTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    const todos = Object.values(this.props.todos);

    return (
      <div className="wrap-todos">
        <Todo todos={todos} removeTodo={this.handleRemoveTodo.bind(this)} />
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
  { fetchTodos, removeTodo }
)(Home);
