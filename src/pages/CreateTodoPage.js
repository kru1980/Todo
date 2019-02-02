import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Row, Col } from "antd";

import CreateTodoForm from "../components/CreateTodoForm";
import { createdTodo } from "../store/actions/projectActions";

const CreateTodoPage = props => {
  const { auth } = props;

  if (!auth.uid) {
    return <Redirect to="signInPage" />;
  } else {
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
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { createdTodo }
)(CreateTodoPage);
