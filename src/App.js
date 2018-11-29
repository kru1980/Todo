import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import HomePage from "./pages/HomePage/HomePage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import CreateTodo from "./pages/CreateTodo";
// import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SignIn from "./components/Auth/SignIn";

import { Layout } from "antd";

import "./index.css";

class App extends Component {
  logout = () => {
    console.log(this.props);
  };

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
              <Route path="/createTodo" component={CreateTodo} />
              <Route path="/todo/:id" component={TodoDetailsPage} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/signUpPage" component={SignUpPage} />
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
