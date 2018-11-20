import React from "react";
import SignUp from "../components/Auth/SignUp";
import { Row, Col } from "antd";

const SignUpPage = () => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={12}>
          <SignUp />
        </Col>
      </Row>
    </div>
  );
};

export default SignUpPage;
