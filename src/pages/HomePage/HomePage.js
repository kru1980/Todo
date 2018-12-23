import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectLists from "../../components/ProjectLists";
import SiderComponent from "../../components/SiderComponent";
import { Layout } from "antd";

class HomePage extends Component {
  render() {
    const { Sider, Content } = Layout;
    const { todos, data, auth } = this.props;
    return (
      <div>
        <Layout>
          <Sider
            theme="light"
            width="260"
            breakpoint="md"
            collapsedWidth="0"
            style={{ color: "white", zIndex: 9999, padding: "20px 0" }}
          >
            <SiderComponent todos={todos} />
          </Sider>
          <Content style={{ background: "lightgrey" }}>
            <ProjectLists todos={todos} auth={auth} data={data} />
          </Content>
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
