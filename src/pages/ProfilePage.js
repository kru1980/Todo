import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import UserTodos from "../components/UserTodos/UserTodos";
import SiderProfile from "../components/UserTodos/SiderProfile";

const ProfilePage = ({ auth, todos }) => {
  // console.log("from ProfilePage auth.uid", auth.uid);

  if (!auth.uid) return <Redirect to="/signInPage" />;
  const { Sider, Content } = Layout;
  return (
    <Layout>
      <Sider theme="light" style={{ padding: 10, border: "1px, solid" }}>
        <SiderProfile />
      </Sider>
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
