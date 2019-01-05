import React from "react";
import SignUp from "../components/Auth/SignUp";
import { Row, Col, Alert } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  signUpAction,
  clearErrorServerMessageAction
} from "../store/actions/authActions";

const SignUpPage = ({
  signUpAction,
  authError,
  auth,
  clearErrorServerMessageAction
}) => {
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <Row>
        <Col span={10} offset={6}>
          <SignUp signUpAction={signUpAction} />
          {authError ? (
            <Alert
              closable
              onClose={clearErrorServerMessageAction}
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
  // console.log("state from SignUpPage", state);

  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { signUpAction, clearErrorServerMessageAction }
)(SignUpPage);
