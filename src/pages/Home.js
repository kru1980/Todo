import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/index";
import R from "ramda";
import { Card, Col, Row } from "antd";

import Todo from "../components/Todo";
// import "./Home.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todos = Object.values(this.props.todos);
    return (
      <div className="wrap-todos">
        <Todo todos={todos} className="todo-item" />
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
  { fetchTodos }
)(Home);
