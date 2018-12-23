import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Layout } from "antd";

const AboutPage = ({ auth }) => {
  if (!auth.uid) return <Redirect to="/signInPage" />;
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(AboutPage);
