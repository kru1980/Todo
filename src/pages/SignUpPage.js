import React from "react";
import SignUp from "../components/Auth/SignUp";
import { Row, Col, Alert } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUpAction } from "../store/actions/authActions";

const SignUpPage = ({ signUpAction, authError, auth }) => {
  const onClose = function(e) {};
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col span={12}>
          <SignUp signUpAction={signUpAction} />
          {authError ? (
            <Alert
              closable
              onClose={onClose}
              message={`ошибка сервера : ${authError}`}
              type="error"
            />
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state from SignUpPage", state);

  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { signUpAction }
)(SignUpPage);
