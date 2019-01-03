import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import TableHOC from "./TableHOC";

import { deleteTodoAcation } from "../store/actions/projectActions";
import { Spin, Icon, Row, Col } from "antd";

const ProjectLists = ({ todos, auth }) => {
  // const { todos } = props;
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  return (
    <div>
      {!todos ? (
        <div>
          <Row type="flex" justify="center" align="middle">
            <Col span={4}>
              <Spin size="large" indicator={antIcon} />
            </Col>
          </Row>
        </div>
      ) : (
        <div>{todos && <TableHOC todos={todos} />}</div>
      )}
    </div>
  );
};

export default compose(
  connect(
    null,
    { deleteTodoAcation }
  ),
  withRouter
)(ProjectLists);
