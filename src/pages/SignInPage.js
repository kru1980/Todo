import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInAction } from "../store/actions/authActions";
import { Row, Col, Alert } from "antd";

import { Redirect } from "react-router-dom";

import SignIn from "../components/Auth/SignIn";

const SignInPage = ({ auth, authError, signInAction }) => {
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={8}>
          <SignIn
            authError={authError}
            auth={auth}
            signInAction={signInAction}
          />
          {authError ? (
            <Alert message={`ошибка сервера : ${authError}`} type="error" />
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
  { signInAction }
)(SignInPage);
