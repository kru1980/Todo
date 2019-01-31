import React from "react";
import { Row, Col, Divider } from "antd";
import Upload from "./Upload";
// import UploadUserFotoComponent from "./UploadUserFotoComponent";

const AccountComponent = ({ profile }) => {
  return (
    <React.Fragment>
      <Row type="flex" justify="center">
        <Col style={{ marginTop: 20 }} xs={{ span: 12 }}>
          <h4>Данные о пользователе:</h4>
          <p>Имя: {profile && profile.displayName} </p>
          <p>E-mail: {profile && profile.email} </p>
          <p>Статус: {profile && profile.role}</p>
          <Divider />
          <Upload />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AccountComponent;
