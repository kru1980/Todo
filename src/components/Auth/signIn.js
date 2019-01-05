import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Icon, Input, Button } from "antd";

import "./SignIn.css";

const FormItem = Form.Item;

class SignInForm extends Component {
  forgotPassword = e => {
    e.preventDefault();
    console.log("Данная функция не работает");
  };
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
              block
            >
              Вход
            </Button>
          </FormItem>
          <FormItem>
            <a
              onClick={this.forgotPassword}
              className="login-form-forgot"
              href="/"
            >
              Забыли пароль?
            </a>
            / <Link to="/signUpPage">Зарегистрироваться!</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const SignIn = Form.create()(SignInForm);
export default SignIn;
