import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { Card, Spin, Icon, Row, Col } from "antd";

const TodoDetails = ({ todo, auth }) => {
  // console.log(todo);

  if (todo) {
    const { title, author, dateTodoCompleted, description } = todo;
    return (
      <Card title={title} style={{ marginTop: 67 }}>
        <p>{description}</p>
        <p>дата выполнения: {dateTodoCompleted}</p>
        <p>автор: {author}</p>
      </Card>
    );
  } else {
    const antIcon = (
      <Icon
        type="loading"
        style={{ fontSize: 46, color: "orangered", marginTop: "180px" }}
        spin
      />
    );
    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <Col>
            <Spin indicator={antIcon} />
          </Col>
        </Row>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todos ? todos[id] : null;

  return {
    todo: todo,
    auth: state.firebase.auth
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos" }])
)(TodoDetails);
