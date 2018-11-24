import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";

import { Card } from "antd";

const TodoDetails = props => {
  console.log("details TodoDetails", props.todo);
  const { todo } = props;

  if (todo) {
    return (
      <Card style={{ marginTop: 67 }}>
        {/* <p>{todo.title}</p> */}
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  } else {
    return <div>...isLoading</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log("state", state);
  // console.log("ownProps", ownProps);
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todo ? todos[id] : null;
  return {
    todo
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos" }])
)(TodoDetails);
