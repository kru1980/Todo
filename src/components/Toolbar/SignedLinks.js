import React from "react";
import ToolbarLinkUI from "./ToolbarLinkUI";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./Toolbar.css";

const SignedLinks = ({ signOut, countTasks }) => {
  return (
    <div>
      <ul className="toolbarList">
        <li>
          <ToolbarLinkUI to="/createTodo">Add Todo</ToolbarLinkUI>
        </li>
        <li>
          <ToolbarLinkUI to="/aboutPage">About User</ToolbarLinkUI>
        </li>
        <li>
          <a className="toolbarLinkUI" onClick={signOut}>
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
};

export default connect(
  null,
  { signOut }
)(SignedLinks);
