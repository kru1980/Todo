import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectLists from "../../components/ProjectLists";

import { Layout } from "antd";

class Home extends Component {
  render() {
    const { Content } = Layout;
    const { todos, auth } = this.props;
    return (
      <div>
        <Layout>
          <Content style={{ background: "lightgrey" }}>
            <div />
            <ProjectLists todos={todos} auth={auth} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default compose(
  firestoreConnect([
    {
      collection: "todos",
      orderBy: ["timeCreatedTodo", "desc"]
    }
  ]),
  connect(state => {
    return {
      todos: state.firestore.ordered.todos,
      auth: state.firebase.auth
    };
  })
)(Home);
