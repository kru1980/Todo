import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import HomePage from "./pages/HomePage/HomePage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import CreateTodoPage from "./pages/CreateTodoPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Layout } from "antd";

import "./index.css";

class App extends Component {
  // logout = () => {
  //   console.log(this.props);
  // };

  render() {
    const { Header, Footer, Content } = Layout;
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              background: "orangered"
            }}
          >
            <Toolbar />
          </Header>
          <Content style={{ background: "#fff", marginTop: 64 }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/createTodo" component={CreateTodoPage} />
              <Route path="/aboutPage" component={AboutPage} />
              <Route path="/todo/:id" component={TodoDetailsPage} />
              <Route path="/signInPage" component={SignInPage} />
              <Route path="/signUpPage" component={SignUpPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
