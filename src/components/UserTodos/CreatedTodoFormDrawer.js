import React from "react";

import { Drawer, Form, Button, Col, Row, Input, DatePicker, Icon } from "antd";

import moment from "moment";
import "moment/locale/ru";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class DrawerForm extends React.Component {
  state = { visible: false };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      const values = {
        ...fieldsValue,

        datePicker: moment(fieldsValue["datePicker"])
          .locale("ru")
          .format("LL")
      };
      // console.log("Received values of form: ", values);
      this.props.form.validateFields();
      this.props.createdTodo(values);
      this.props.form.resetFields();
      this.setState({
        visible: false
      });
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
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> Добавить задачу
        </Button>
        <Drawer
          title="Добавить задачу"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: "auto",
            height: "calc(100% - 108px)",
            // height: "50%",
            paddingBottom: "108px"
          }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <FormItem
                  validateStatus={todoError ? "error" : ""}
                  help={todoError || ""}
                >
                  {getFieldDecorator("title", {
                    rules: [
                      { required: true, message: "Пожалуйста введите задачу!" }
                    ]
                  })(
                    <Input
                      autoFocus
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
              </Col>
              <Col span={12}>
                <FormItem
                  validateStatus={todoError ? "error" : ""}
                  help={todoError || ""}
                >
                  {getFieldDecorator("datePicker", config)(
                    <DatePicker format={"DD/MM/YYYY"} />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Отмена
            </Button>
            <Button
              onClick={this.handleSubmit}
              type="primary"
              disabled={hasErrors(getFieldsError())}
              // htmlType="submit"
            >
              Добавить задачу
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const CreatedTodoFormDrawer = Form.create()(DrawerForm);

export default CreatedTodoFormDrawer;
