import React, { Component } from "react";
import { Button, Icon, Input } from "antd";

import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleStateUpdateTodo = this.handleStateUpdateTodo.bind(this);
    this.handleСancelUpdate = this.handleСancelUpdate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isEditing) {
      this.refs.newTitleTodo.focus();
      this.refs.newTitleTodo.select();
    }
  }

  handleСancelUpdate() {
    this.setState({ isEditing: false });
  }

  handleStateUpdateTodo(e) {
    // const { id, dateCompletedTod } = this.props.todo;
    e.preventDefault();
    const newTodoTitle = this.refs.newTitleTodo.value;
    const dateCompletedTod = this.refs.dateCompletedTod.value;
    this.props.updateTodo(this.props.todo.id, newTodoTitle, dateCompletedTod);
    this.setState({ isEditing: false });
  }
  renderForm() {
    return (
      <div className="todoItem">
        <form>
          <div className="todoItem-text">
            <input
              ref="newTitleTodo"
              defaultValue={this.props.todo.titleTodo}
            />
            <input
              ref="dateCompletedTod"
              defaultValue={this.props.todo.dateCompletedTod}
            />
          </div>
          <div className="todoItem-footer">
            <Button type="danger" onClick={this.handleStateUpdateTodo}>
              <Icon type="save" theme="outlined" />
            </Button>
            <Button type="danger" onClick={this.handleСancelUpdate}>
              <Icon type="stop" theme="outlined" />
            </Button>
          </div>
        </form>
      </div>
    );
  }
  renderDisplay() {
    const { todo, removeTodo } = this.props;
    const { id, date, titleTodo, dateCompletedTod } = todo;

    return (
      <div>
        <div className="todoItem">
          <div className="todoItem-text">
            {titleTodo}
            <h4>
              Date dedline:
              {dateCompletedTod}
            </h4>
            <h6>
              Date create:
              {date}
            </h6>
          </div>
          <div className="todoItem-footer">
            <Button type="danger" onClick={() => removeTodo(id)}>
              <Icon type="delete" theme="outlined" />
            </Button>
            <Button
              type="danger"
              onClick={() => this.setState({ isEditing: true })}
            >
              <Icon type="edit" theme="outlined" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.isEditing ? this.renderForm() : this.renderDisplay()}
      </div>
    );
  }
}

export default Todo;
