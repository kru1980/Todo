import React from "react";
import ToolbarLinkUI from "./ToolbarLinkUI";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./Toolbar.css";

const SignedLinks = ({ signOut, countTasks, profile }) => {
  const { nickname } = profile;
  return (
    <div>
      <ul className="toolbarList">
        <li>
          <ToolbarLinkUI to="/createTodo">Add Todo</ToolbarLinkUI>
        </li>
        <li>
          <ToolbarLinkUI to="/profilePage">Profile</ToolbarLinkUI>
        </li>
        <li>
          <a className="toolbarLinkUI" onClick={signOut}>
            Log Out
          </a>
        </li>
        <li>
          {" "}
          <span style={{ color: "green" }}>
            Привет: <span>{nickname}</span>
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
