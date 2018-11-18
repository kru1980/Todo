import React from "react";
import { NavLink } from "react-router-dom";

import ToolbarLinkUI from "./ToolbarLinkUI";
import "./Toolbar.css";

export default function SignedOutLinks() {
  return (
    <div>
      <ul className="toolbarList toolbarList--signOut">
        <li>
          <ToolbarLinkUI to="/signIn">SignIn</ToolbarLinkUI>
        </li>
        <li>
          <ToolbarLinkUI to="/signUp">SignUp</ToolbarLinkUI>
        </li>
      </ul>
    </div>
  );
}
