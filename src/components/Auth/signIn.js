import React, { Component } from "react";
import { connect } from "react-redux";
import { signInAction } from "../../store/actions/authActions";
import { Form, Icon, Input, Button, Row, Col } from "antd";
import { auth } from "firebase";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";

const FormItem = Form.Item;

class SignInForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInAction(values);
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { getFieldDecorator, authError } = this.props.form;

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

              {authError ? (
                <FormItem>
                  <div>{authError}</div>
                </FormItem>
              ) : null}
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const SignIn = Form.create()(SignInForm);

const mapStateToProps = state => {
  console.log(state);

  return {
    authError: auth.authError
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { signInAction }
  )
)(SignIn);
