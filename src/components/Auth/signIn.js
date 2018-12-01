import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInAction } from "../../store/actions/authActions";
import { Form, Icon, Input, Button, Row, Col } from "antd";

import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";

const FormItem = Form.Item;

class SignInForm extends Component {
  // static propTypes = {
  //   auth: React.PropTypes.object,
  //   authError: PropTypes.any
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInAction(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { auth } = this.props;
    console.log("from decorator form props.form", this.props.form);
    console.log("from decorator form props", this.props);
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={8}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("email", {
                  rules: [{ required: true, message: "Введите ваш email!" }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="email"
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "Введите ваш пароль!" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>

              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Вход
                </Button>
              </FormItem>

              <FormItem>{getFieldDecorator("authError")(<Input />)}</FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const SignIn = Form.create({
  mapPropsToFields(props) {
    console.log("props in Form.create", props);

    return {
      authError: Form.createFormField({
        ...props.authError,
        value: props.auth.authError
      })
    };
  }
})(SignInForm);

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { signInAction }
  )
)(SignIn);
