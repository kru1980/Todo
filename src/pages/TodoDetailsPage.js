import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "antd";
import TodoDetails from "../components/TodoDetails/TodoDetails";
import { connect } from "react-redux";

const TodoDetailsPage = ({ auth }) => {
  if (!auth.uid) {
    return <Redirect to="/signInPage" />;
  }

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
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(TodoDetailsPage);
