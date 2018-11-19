import React from "react";
import ToolbarLinkUI from "./ToolbarLinkUI";

import "./Toolbar.css";

export default function SignedLinks({ user, countTasks }) {
  return (
    <div>
      <ul className="toolbarList">
        <li>
          <ToolbarLinkUI to="/createTodo">Add Todo</ToolbarLinkUI>
        </li>
        <li>
          <ToolbarLinkUI to="/aboutUser">About User</ToolbarLinkUI>
        </li>
        <li>
          <a className="toolbarLinkUI" onClick={() => console.log("exit")}>
            Log Out
          </a>
        </li>
        <li>
          {" "}
          <span style={{ color: "green" }}>
            Количество задач: <span>{countTasks}</span>
          </span>{" "}
        </li>
      </ul>
    </div>
  );
}
