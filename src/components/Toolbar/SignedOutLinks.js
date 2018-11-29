import React from "react";

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
          <ToolbarLinkUI to="/signUpPage">SignUp</ToolbarLinkUI>
        </li>
      </ul>
    </div>
  );
}
