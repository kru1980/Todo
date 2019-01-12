import React from "react";

import { Row, Col } from "antd";
import PandaIcon from "./Logo";

import ToolbarLinkUI from "./ToolbarLinkUI";
import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Toolbar = props => {
  const {
    auth: { uid },
    profile
  } = props;

  let countTasks = 6590;
  // console.log("props", props);

  const emailVerified = true;
  const links =
    uid && emailVerified ? (
      <SignedLinks profile={profile} countTasks={countTasks} />
    ) : (
      <SignedOutLinks />
    );

  return (
    <div>
      <Row type="flex">
        <Col xs={{ span: 1, offset: 0 }} md={{ span: 3, offset: 2 }}>
          <ToolbarLinkUI exact to="/">
            <PandaIcon />
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
