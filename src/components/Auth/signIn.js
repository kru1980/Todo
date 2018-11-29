import React, { Component } from "react";
import { connect } from "react-redux";
import { signInAction } from "../../store/actions/authActions";
import { Form, Icon, Input, Button } from "antd";
import { auth } from "firebase";
import { Redirect } from "react-router-dom";

const FormItem = Form.Item;

class SignInForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Сохраненные значения из формы Login: ", values);
        this.props.signInAction(values);
      }
    });
  };

  render() {
    const { getFieldDecorator, authError } = this.props.form;

    console.log("this.props from signIn", this.props);

    return (
      <div>
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

const mapDispatchToProps = dispatch => {
  return {
    signInAction: existingUser => dispatch(signInAction(existingUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
