import React, { Component } from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  // Select,
  Checkbox,
  Button
  // AutoComplete
} from "antd";

const FormItem = Form.Item;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

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
          {getFieldDecorator("nickname", {
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
              Я прочитал и <a href="">согласен</a>
            </Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.state.disabledButton}
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
