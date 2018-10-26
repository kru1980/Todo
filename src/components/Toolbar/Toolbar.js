import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Toolbar.css";
import { hakLength } from "../../selectors";
import { Affix } from "antd";

class Toolbar extends Component {
  render() {
    const { countTasks, user } = this.props;

    return (
      <div>
        <Affix>
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
                Количество задач: <span>{countTasks}</span>
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
        </Affix>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countTasks: hakLength(state)
  };
};

export default connect(mapStateToProps)(Toolbar);
