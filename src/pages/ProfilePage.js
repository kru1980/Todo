import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import UserTodos from "../components/UserTodos/UserTodos";
import SiderProfile from "../components/UserTodos/SiderProfile";

const ProfilePage = ({ auth, todos, profile }) => {
  // console.log("from ProfilePage auth", auth);
  // console.log("from ProfilePage todos", todos);
  // console.log("from ProfilePage profile", profile);

  if (!auth.uid) return <Redirect to="/signInPage" />;
  const { Sider, Content } = Layout;
  return (
    <Layout>
      <Content style={{ background: "#f0f2f5" }}>
        <UserTodos todos={todos} auth={auth} profile={profile} />
      </Content>
      <Sider
        width="320px"
        theme="light"
        style={{ padding: 10, border: "1px, solid", background: "#f0f2f5" }}
      >
        <SiderProfile auth={auth} todos={todos} profile={profile} />
      </Sider>
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
    todos: state.firestore.ordered.todos,
    profile: state.firebase.profile
  }))
)(ProfilePage);
