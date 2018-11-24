import React from "react";
import { Row, Col } from "antd";
import TodoDetails from "../components/TodoDetails";

const TodoDetailsPage = () => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={12}>
          <TodoDetails />
        </Col>
      </Row>
    </div>
  );
};

export default TodoDetailsPage;
