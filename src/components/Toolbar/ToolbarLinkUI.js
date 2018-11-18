import React from "react";
import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const ToolbarLinkUI = props => {
  return (
    <div>
      <NavLink
        className="toolbarLinkUI"
        activeClassName="activeClassName"
        {...props}
      >
        {props.children}
      </NavLink>
    </div>
  );
};
export default ToolbarLinkUI;
