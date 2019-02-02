import React from "react";
import { Card, Spin, Icon, Row, Col, List, Avatar } from "antd";

const AdminComponent = ({ users }) => {
  console.log("props AdminComponent", users);
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  return (
    <div>
      {!users ? (
        <div>
          <Row type="flex" justify="center" align="middle">
            <Col span={4}>
              <Spin size="large" indicator={antIcon} />
            </Col>
          </Row>
        </div>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={user => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.photoURL || null} />}
                title={<a href="#">{user.displayName}</a>}
                description={`Статус пользователя: ${user.role}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};
export default AdminComponent;
