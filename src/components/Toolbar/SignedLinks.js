import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ToolbarLinkUI from "./ToolbarLinkUI";
import { signOut } from "../../store/actions/authActions";

import { Avatar, Menu, Dropdown, Icon } from "antd";
import "./Toolbar.css";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/AccountPage">Account</Link>
    </Menu.Item>
  </Menu>
);

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
              <Avatar
                size="large"
                src={`${photoURL}`}
                style={{ marginRight: 10 }}
              />
            ) : (
              <Avatar
                style={{ backgroundColor: "#87d068", marginRight: 10 }}
                icon="user"
              />
            )}{" "}
            Привет:{" "}
            <span>
              {nickname || displayName}{" "}
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  // href="#"
                  style={{ color: "green" }}
                >
                  <Icon type="down" />
                </a>
              </Dropdown>
            </span>
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
