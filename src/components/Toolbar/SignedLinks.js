import React from "react";
import { connect } from "react-redux";
import ToolbarLinkUI from "./ToolbarLinkUI";
import { signOut } from "../../store/actions/authActions";

import { Avatar } from "antd";
import "./Toolbar.css";

const SignedLinks = ({ signOut, profile }) => {
  const { nickname, displayName, photoURL } = profile;
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
            {photoURL ? (
              <Avatar src={`${photoURL}`} style={{ marginRight: 10 }} />
            ) : (
              <Avatar
                style={{ backgroundColor: "#87d068", marginRight: 10 }}
                icon="user"
              />
            )}{" "}
            Привет: <span>{nickname || displayName}</span>
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
