import React, { Component } from "react";
import { Button, Icon } from "antd";

import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }
  renderForm() {
    return (
      <div>
        <form action="">
          <input type="text" defaultValue={this.props.todo.titleTodo} />
          <button
            type="submit"
            onClick={() => this.props.updateTodo(this.props.id)}
          >
            save
          </button>
        </form>
      </div>
    );
  }
  renderDisplay() {
    const { todo, removeTodo } = this.props;
    console.log(this.props);

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
