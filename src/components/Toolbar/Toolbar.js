import React from "react";

import { Row, Col } from "antd";

import ToolbarLinkUI from "./ToolbarLinkUI";
import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Toolbar = props => {
  const { auth, profile } = props;

  let countTasks = 33;

  const links = auth.uid ? (
    <SignedLinks profile={profile} countTasks={countTasks} />
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
};
const mapSateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapSateToProps)(Toolbar);
