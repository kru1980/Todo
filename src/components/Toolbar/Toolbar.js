import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Toolbar.css";

class Toolbar extends Component {
  render() {
    // const { countTasks, user } = this.props;
    const user = "vata";

    return (
      <div>
        <div className="wraper-toolBar">
          <div className="toolbar-links">
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Главная
            </NavLink>

            {user ? (
              <NavLink
                activeStyle={{
                  fontWeight: "bold"
                }}
                to="/createTodo"
              >
                Добавить
              </NavLink>
            ) : null}
          </div>
          <div className="toolbar-count">
            <h4>
              Количество задач: <span>33</span>
            </h4>
          </div>
          <div className="toolbar-registration">
            {user ? (
              <NavLink to="/logout">Выход</NavLink>
            ) : (
              <NavLink to="/login">Вход/Регистрация</NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
