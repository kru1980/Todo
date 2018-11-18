import React from "react";
import { NavLink } from "react-router-dom";

import ToolbarLinkUI from "./ToolbarLinkUI";

export default function SignedOutLinks() {
  return (
    <div>
      <ToolbarLinkUI to="/createTodo">AddTodo</ToolbarLinkUI>
      <div className="toolbar-count">
        <h4>{/* Количество задач: <span>{countTasks}</span> */}</h4>
      </div>
    </div>
  );
}
