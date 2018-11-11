import React from "react";
import { NavLink } from "react-router-dom";
import "./Toolbar.css";

export default function SignedOutLinks() {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bold"
        }}
        to="/createTodo"
      >
        Добавить
      </NavLink>
      <div className="toolbar-count">
        <h4>{/* Количество задач: <span>{countTasks}</span> */}</h4>
      </div>
    </div>
  );
}
