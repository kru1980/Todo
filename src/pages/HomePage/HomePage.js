import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectLists from "../../components/ProjectLists";
import { Layout } from "antd";

class Home extends Component {
  render() {
    const { Sider, Content } = Layout;
    const { todos } = this.props;
    return (
      <div>
        <Layout>
          <Content>
            <ProjectLists todos={todos} />
          </Content>

          <Sider
            theme="light"
            width="280"
            style={{
              padding: 24,

              background: "green",
              height: "80vh"
            }}
          >
            <h4>hello sidebar</h4>
          </Sider>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state from Home", state);
  return {
    todos: state.firestore.ordered.todos,
    users: state.firestore.ordered.users
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos" }])
)(Home);
