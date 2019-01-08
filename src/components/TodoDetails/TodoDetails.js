import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link, withRouter } from "react-router-dom";

import { Card, Spin, Icon, Row, Col, Breadcrumb } from "antd";
import "./TodoDetails.css";

// =========== Breadcrumb start ===========

const breadcrumbNameMapGenerator = (location, todo) => {
  return {
    "/profilePage": "ProfilePage",
    [location.pathname]: `Название задачи:  ${todo.title}`
  };
};
// =========== Breadcrumb end ===========

const TodoDetails = ({ todo, location }) => {
  if (todo) {
    // =========== Breadcrumb start ===========
    const pathSnippets = location.pathname.split("/").filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMapGenerator(location, todo)[url]}
          </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);
    // =========== Breadcrumb end ===========
    const { title, displayName, dateTodoCompleted, description } = todo;

    return (
      <div>
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        <Card title={title} style={{ marginTop: 67 }}>
          <p>{description}</p>
          <p>дата выполнения: {dateTodoCompleted}</p>
          <p>автор: {displayName}</p>
        </Card>
      </div>
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
