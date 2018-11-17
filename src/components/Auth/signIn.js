import React, { Component } from "react";

import { Row, Col, Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

class Login extends Component {
  login = ({ email, password }) => {
    console.log(email, password);
  };

  //TODO:Необходимо реализовать регистрацию пользователей
  //   === metod aht form start
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Сохраненные значения из формы: ", values);
        //TODO: После авторизации пользователя сделать редирект
        this.login(values);
      }
    });
  };
  //  end

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={6}>
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
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
