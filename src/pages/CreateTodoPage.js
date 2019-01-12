import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "antd";
import CreateTodoForm from "../components/CreateTodoForm";
import { createdTodo } from "../store/actions/projectActions";
import { connect } from "react-redux";

const CreateTodoPage = props => {
  const { auth } = props;
  console.log("CreateTodoPage", props);

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
