import React from "react";
import { Row, Col } from "antd";
import CreateTodoForm from "../components/CreateTodoForm";

const CreateTodo = () => {
  return (
    <div>
      <div>
        <Row type="flex" justify="center">
          <Col span={8}>
            <CreateTodoForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateTodo;
