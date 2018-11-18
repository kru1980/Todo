import React, { Component } from "react";

import { connect } from "react-redux";
import { Row, Col } from "antd";

import ToolbarLinkUI from "./ToolbarLinkUI";
import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";

class Toolbar extends Component {
  render() {
    // const { user, countTasks } = this.props;
    let user = true;
    let countTasks = 33;

    const links = user ? (
      <SignedLinks user={user} countTasks={countTasks} />
    ) : (
      <SignedOutLinks />
    );
    // const styleRow = {
    //   height: "64px",
    //   background: "orangered"
    // };

    return (
      <div>
        <Row type="flex" align="middle">
          <Col offset={1} span={9}>
            <ToolbarLinkUI exact to="/" className="logo">
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
