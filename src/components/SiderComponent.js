import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

const SiderComponent = ({ todos }) => {
  if (!todos) return <div />;
  return (
    <div>
      <Row type="flex" justify="center">
        <Col offset={1} span={22} style={{ marginBottom: 20 }}>
          <h3>всего todos : {todos.length}шт</h3>
          <p>Добавить fetch данные например погоды или валюты</p>
          <span>span={24}</span>
        </Col>
      </Row>
    </div>
  );
};

SiderComponent.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      //   author:React.PropTypes.string.isRequired, // сперва поудалять
      description: PropTypes.string.isRequired,
      timeCreatedTodo: PropTypes.number.isRequired,
      datePicker: PropTypes.string.isRequired
    })
  )
};

export default SiderComponent;
