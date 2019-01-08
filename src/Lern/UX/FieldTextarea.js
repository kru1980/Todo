import React from "react";
import { Input, Form } from "antd";

// import "./field_textarea.css";

const { TextArea } = Input;
const FormItem = Form.Item;

const FieldTextarea = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FormItem
      label={label}
      validateStatus={touched && error ? "error" : "success"}
      help={touched && error ? error : ""}
    >
      <TextArea
        {...input}
        type={type}
        placeholder="Введите текст задачи"
        autosize={{ minRows: "2", maxRows: "6" }}
      />
    </FormItem>
  );
};

export default FieldTextarea;
