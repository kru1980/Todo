import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectLists from "../../components/ProjectLists";
import SiderComponent from "../../components/SiderComponent";
import { Layout } from "antd";

class Home extends Component {
  render() {
    const { Sider, Content } = Layout;
    const { todos } = this.props;
    return (
      <div>
        <Layout>
          <Content style={{ background: "lightgrey" }}>
            <ProjectLists todos={todos} />
          </Content>

          <Sider
            theme="light"
            width="280"
            style={{
              padding: 24,

              background: "lightgrey"
            }}
          >
            <SiderComponent todos={todos} />
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
    users: state.firestore
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos" }])
)(Home);
