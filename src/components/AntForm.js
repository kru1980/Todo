import React from "react";
import { connect } from "react-redux";
import { Form, DatePicker, Button, Input, Icon } from "antd";
import { addTodo } from "../actions/actionsCreators";
import locale from "antd/lib/date-picker/locale/ru_RU";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class TimeRelatedForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.

      const values = {
        ...fieldsValue,
        datePicker: fieldsValue["datePicker"].format("YYYY-MM-DD")
      };
      // console.log("Received values of form: ", values);
      this.props.addTodo(values);
      this.props.form.resetFields();
      this.props.form.validateFields();
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const todoError = isFieldTouched("todo") && getFieldError("todo");

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
    const config = {
      rules: [
        {
          type: "object",
          required: true,
          message: "Пожалуйста выберите время!"
        }
      ]
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={todoError ? "error" : ""}
          help={todoError || ""}
        >
          {getFieldDecorator("titleTodo", {
            rules: [{ required: true, message: "Пожалуйста введите задачу!" }]
          })(
            <Input
              prefix={
                <Icon
                  type="edit"
                  theme="outlined"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder="Введите задачу"
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          validateStatus={todoError ? "error" : ""}
          help={todoError || ""}
        >
          {getFieldDecorator("datePicker", config)(
            <DatePicker locale={locale} />
          )}
        </FormItem>

        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <Button
            type="danger"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Добавить задачу
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const AntForm = Form.create()(TimeRelatedForm);

export default connect(
  null,
  { addTodo }
)(AntForm);