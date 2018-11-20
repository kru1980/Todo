import React from "react";
import { Row, Col } from "antd";
import SignIn from "../components/Auth/SignIn";

const SignInPage = () => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={8}>
          <SignIn />
        </Col>
      </Row>
    </div>
  );
};

export default SignInPage;
