import React, { Component } from "react";

import { Row, Col } from "antd";

import ToolbarLinkUI from "./ToolbarLinkUI";
import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";

class Toolbar extends Component {
  render() {
    // const { user, countTasks } = this.props;
    let user = false;
    let countTasks = 33;

    const links = user ? (
      <SignedLinks user={user} countTasks={countTasks} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <div>
        <Row type="flex" align="middle">
          <Col offset={1} span={9}>
            <ToolbarLinkUI exact to="/">
              Logo
            </ToolbarLinkUI>
          </Col>
          <Col span={14}>{links}</Col>
        </Row>
      </div>
    );
  }
}

export default Toolbar;
