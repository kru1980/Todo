import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/index";
import R from "ramda";

import { Button } from "antd";
import Title from "antd/lib/skeleton/Avatar";

class Home extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const todos = Object.values(this.props.todos);
    const objTodo = this.props.todos;
    console.log("objTodo render page Home", objTodo);

    return (
      <div>
        {todos.map(item => (
          <div key={item.id}>{item.titleTodo}</div>
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
  { fetchTodos }
)(Home);
