import React from "react";
import PropTypes from "prop-types";

const SiderComponent = ({ todos }) => {
  if (!todos) return <div />;
  return (
    <div>
      <h3>всего todos : {todos.length}шт</h3>
      <p>Добавить fetch данные например погоды или валюты</p>
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
