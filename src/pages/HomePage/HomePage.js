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
    const { todos, data, auth } = this.props;
    return (
      <div>
        <Layout>
          <Content style={{ background: "lightgrey" }}>
            <ProjectLists todos={todos} auth={auth} data={data} />
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
  return {
    todos: state.firestore.ordered.todos,
    auth: state.firebase.auth
  };
};
export default compose(
  firestoreConnect([{ collection: "todos" }]),
  connect(mapStateToProps)
)(Home);
