import React from "react";
import { Row, Col } from "antd";
import SideBar from "../components/SideBar";

const CreateTodo = () => {
  return (
    <div>

      <div>
      <Row type="flex" justify="center">
          <Col span={8}>
            <SideBar />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateTodo;
