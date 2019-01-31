import React from "react";
import { connect } from "react-redux";

import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";

import { Row, Col } from "antd";
import Logo from "./Logo";
import ToolbarLinkUI from "./ToolbarLinkUI";

const Toolbar = ({ profile, auth: { uid } }) => {
  const emailVerified = true;
  const links =
    uid && emailVerified ? (
      <SignedLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );

  return (
    <div>
      <Row type="flex">
        <Col xs={{ span: 1, offset: 0 }} md={{ span: 3, offset: 2 }}>
          <ToolbarLinkUI exact to="/">
            <Logo />
          </ToolbarLinkUI>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} md={{ span: 17, offset: 2 }}>
          {links}
        </Col>
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
