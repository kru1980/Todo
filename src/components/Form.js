import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";
import FieldInput from "./UX/FieldInput";
import FieldTextarea from "./UX/FieldTextarea";
import { addTodo } from "../actions/actionsCreators";

const Form = props => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  const onSubmit = addTodo => {
    props.addTodo(addTodo);
    props.reset("todos");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          name="titleTodo"
          component={FieldInput}
          type="text"
          label="Заголовок"
        />
        <Field
          name="description"
          component={FieldTextarea}
          type="text"
          label="Описание"
        />

        <Button
          disabled={invalid || pristine || submitting}
          className="btn-submit"
          type="primary"
          htmlType="submit"
        >
          Добавить
        </Button>
      </div>
    </form>
  );
};
export default compose(
  connect(
    null,
    { addTodo }
  ),
  reduxForm({ form: "todos" })
)(Form);
