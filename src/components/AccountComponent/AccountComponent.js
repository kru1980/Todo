import React from "react";
import { Row, Col, Divider } from "antd";
import Upload from "./Upload";

const AccountComponent = ({ profile }) => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col style={{ marginTop: 20 }} xs={{ span: 12 }}>
          <h4>Данные о пользователе:</h4>
          <p>Имя: {profile && profile.displayName} </p>
          <p>E-mail: {profile && profile.email} </p>
          <p>Статус: {profile && profile.role}</p>
          <Divider />
          <h4>Изменить аватар пользователя:</h4>
          <div>
            <Upload />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AccountComponent;
