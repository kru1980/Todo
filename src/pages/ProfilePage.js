import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { Row, Col, Layout } from "antd";
import UserTodos from "../components/UserTodos/UserTodos";

const ProfilePage = ({ auth, todos, authUid }) => {
  console.log("from ProfilePage", authUid);
  // console.log("from ProfilePage", authUidProps);

  if (!auth.uid) return <Redirect to="/signInPage" />;
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        <UserTodos todos={todos} auth={auth} />
      </Content>
    </Layout>
  );
};

export default compose(
  firestoreConnect([
    {
      collection: "todos"
    }
  ]),
  connect((state, props) => ({
    auth: state.firebase.auth,
    todos: state.firestore.ordered.todos
  }))
)(ProfilePage);
