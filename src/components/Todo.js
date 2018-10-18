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
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isEditing) {
      this.refs.newTitleTodo.focus();
      this.refs.newTitleTodo.select();
    }
  }

  handleStateUpdateTodo(e) {
    e.preventDefault();
    const newTodoTitle = this.refs.newTitleTodo.value;
    // console.log("newTodoTitle from todo", newTodoTitle);

    this.props.updateTodo(this.props.todo.id, newTodoTitle);
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
          </div>
          <div className="todoItem-footer">
            <Button type="danger" onClick={this.handleStateUpdateTodo}>
              <Icon type="save" theme="outlined" />
            </Button>
          </div>
        </form>
      </div>
    );
  }
  renderDisplay() {
    const { todo, removeTodo } = this.props;
    // console.log(this.props);

    const { id, date, titleTodo } = todo;
    return (
      <div>
        <div className="todoItem">
          <div className="todoItem-text">
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
