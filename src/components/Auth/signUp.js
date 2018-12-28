import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Tooltip, Icon, Checkbox, Button } from "antd";

const FormItem = Form.Item;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    disabledButton: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Получи значения из RegistrationForm: ", values);
        this.props.signUpAction({ ...values });
        this.props.form.resetFields();
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Пароли не совпадают!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  onChange = e => {
    console.log(`checked = ${e.target.checked}`);

    if (e.target.checked) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Пожалуйста введите ваш E-mail!"
              }
            ]
          })(<Input placeholder="Пожалуйста введите ваш E-mail" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Пароль">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Введите пароль!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" placeholder="Введите ваш пароль" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Подтвердите пароль">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Потвердите ваш пароль!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              placeholder="Повторите ваш пароль"
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={
            <span>
              Ник&nbsp;
              <Tooltip title="Как вы хотите, чтобы окружающие к вам обращались?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("displayName", {
            rules: [
              {
                required: true,
                message: "Пожалуйста введите свой ник!",
                whitespace: true
              }
            ]
          })(<Input placeholder="Введите ваш ник" />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox onChange={this.onChange}>
              Я прочитал и{" "}
              <Link to="/aboutPage">согласен c политикой сайта</Link>
            </Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.state.disabledButton}
            block
          >
            Регистрация
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SignUp = Form.create()(RegistrationForm);

export default SignUp;
