import React from "react";
import { Row, Col } from "antd";
import CreateTodoForm from "../components/CreateTodoForm";
import { createdTodo } from "../store/actions/projectActions";
import { connect } from "react-redux";

const CreateTodo = props => {
  return (
    <div>
      <div>
        <Row type="flex" justify="center">
          <Col span={8}>
            <CreateTodoForm createdTodo={props.createdTodo} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createdTodo: todo => dispatch(createdTodo(todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
