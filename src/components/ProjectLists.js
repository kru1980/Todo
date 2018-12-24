import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { deleteTodoAcation } from "../store/actions/projectActions";
import { Card, List, Spin, Icon, Row, Col, Button, Table } from "antd";

const ProjectLists = props => {
  const { todos, deleteTodoAcation, auth } = props;
  // console.log("auth", auth);
  console.log("todos ProjectLists", todos);

  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  function onChange(pagination, filters, sorter) {
    console.log("params", pagination, filters, sorter);
  }

  return (
    <div>
      {todos && (
        <Table columns={columns} dataSource={data} onChange={onChange} />
      )}
      {!todos ? (
        <div>
          <Row type="flex" justify="center" align="middle">
            <Col span={4}>
              <Spin size="large" indicator={antIcon} />
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          {todos && (
            <List
              style={{ marginTop: "30px" }}
              bordered={true}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 6
              }}
              dataSource={todos}
              renderItem={item => (
                <List.Item>
                  <Card
                    title={item.title}
                    headStyle={{ background: "lightgreen" }}
                    bordered={false}
                    hoverable={true}
                  >
                    <p>{item.title}</p>
                    <p>Автор: {item.displayName}</p>
                    <p>Время создания: {item.timeCreatedTodo}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Button
                        onClick={() => props.history.push(`/todo/${item.id}`)}
                        style={{ background: "lightgreen" }}
                      >
                        Описание
                      </Button>
                      {/* {auth.uid ? (
                        <Button
                          onClick={() => deleteTodoAcation(item.id)}
                          type="danger"
                          style={{ marginLeft: 10 }}
                        >
                          Удалить
                        </Button>
                      ) : null} */}
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </div>
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
