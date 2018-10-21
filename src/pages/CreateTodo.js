import React from "react";
import { Row, Col } from "antd";
import SideBar from "../components/SideBar";

const CreateTodo = () => {
  return (
    <div>
      page CreateTodo
      <div>
        <Row>
          <Col span={24}>
            <SideBar />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateTodo;
