import React, { Component } from "react";
import { Layout, Card, List } from "antd";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { Content, Sider } = Layout;
    const { todos } = this.props;
    return (
      <div>
        <Layout>
          <Content>
            <div style={{ padding: 24, background: "orange" }}>
              {todos &&
                todos.map(todo => {
                  return (
                    <Card
                      title={todo.title}
                      extra={<Link to={`/todo/${todo.id}`}>More</Link>}
                      style={{ width: 300, marginBottom: 10 }}
                      key={todo.id}
                    >
                      <p>author: {todo.author}</p>
                      <p>dateTodoCompleted: {todo.dateTodoCompleted}</p>
                    </Card>
                  );
                })}
            </div>
          </Content>

          <Sider
            theme="light"
            width="400"
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
  console.log(state);

  return {
    todos: state.firestore.ordered.todos
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos" }])
)(Home);
