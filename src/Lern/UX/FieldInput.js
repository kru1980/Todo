import React from "react";
import { Input, Form } from "antd";

// import "./field_input.css";

const FormItem = Form.Item;

const FieldInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <FormItem
      label={label}
      validateStatus={touched && error ? "error" : "success"}
      help={touched && error ? error : ""}
    >
      <Input {...input} type={type} placeholder="Заголовок задачи" />
    </FormItem>
  );
};

export default FieldInput;
