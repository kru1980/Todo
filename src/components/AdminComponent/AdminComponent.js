import React from "react";
import { Row, Col, List, Avatar, Skeleton, message } from "antd";
import "./AdminComponent.css";

const AdminComponent = ({ users }) => {
  const editUser = e => {
    e.preventDefault();
    message.success(`pushed edit button`);
  };
  return (
    <div>
      <Row>
        <Col span={6}>sider</Col>
        <Col span={17}>
          <List
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3
            }}
            itemLayout="horizontal"
            dataSource={users}
            renderItem={user => {
              const description = (
                <React.Fragment>
                  <p>{`Статус пользователя: ${user.role}`}</p>
                  <p>{`Эл. почта пользователя:  ${user.email ||
                    "почта не задана"}`}</p>
                  <p>{`Пароль пользователя: ${user.password ||
                    "пароль не задан"}`}</p>
                </React.Fragment>
              );
              return (
                <List.Item actions={[<a onClick={editUser}>edit</a>]}>
                  <Skeleton
                    avatar
                    title={false}
                    loading={users ? false : true}
                    active
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={user.photoURL || null} />}
                      title={<a>{user.displayName}</a>}
                      description={description}
                    />
                  </Skeleton>
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default AdminComponent;
