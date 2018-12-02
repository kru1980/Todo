import React from "react";
import { Link } from "react-router-dom";
import { Card, List, Spin, Icon, Row, Col } from "antd";

const ProjectLists = props => {
  const { todos } = props;
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
        <div style={{ padding: 24, background: "orange" }}>
          {todos && (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3
              }}
              dataSource={todos}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>
                    <p>{item.title}</p>
                    {<Link to={`/todo/${item.id}`}>Далее</Link>}
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

export default ProjectLists;
