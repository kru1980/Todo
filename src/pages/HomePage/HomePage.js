import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectLists from "../../components/ProjectLists";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

import { Layout } from "antd";

class Home extends Component {
  render() {
    const { todos, auth } = this.props;
    return (
      <div>
        <Layout>
          <SliderComponent />
          <ProjectLists todos={todos} auth={auth} />
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
