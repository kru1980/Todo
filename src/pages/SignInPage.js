import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SignIn from "../components/Auth/SignIn";
import {
  signInAction,
  clearErrorServerMessageAction
} from "../store/actions/authActions";

import { Row, Col, Alert } from "antd";

const SignInPage = ({
  auth,
  authError,
  signInAction,
  clearErrorServerMessageAction
}) => {
  const onClose = function(e) {};

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <Row type="flex" justify="center">
        <Col xs={{ span: 16 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <SignIn
            // onClose={onClose}
            authError={authError}
            auth={auth}
            signInAction={signInAction}
          />
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

SignInPage.propTypes = {};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { signInAction, clearErrorServerMessageAction }
)(SignInPage);
