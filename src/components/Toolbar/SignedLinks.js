import React from "react";
import ToolbarLinkUI from "./ToolbarLinkUI";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./Toolbar.css";

const SignedLinks = props => {
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
            Количество задач: <span>{props.countTasks}</span>
          </span>{" "}
        </li>
      </ul>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedLinks);
