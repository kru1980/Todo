import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import LayOut from "./components/LayOut";
import Home from "./pages/Home/Home";
import CreateTodo from "./pages/CreateTodo";
import signIn from "./components/Auth/signIn";
import signUp from "./components/Auth/signUp";

import { Layout, Row, Col } from "antd";

import "./index.css";

class App extends Component {
  logout = () => {
    console.log(this.props);
  };

  render() {
    const { Header, Footer, Sider, Content } = Layout;
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
          <Content style={{ background: "#fff" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/createTodo" component={CreateTodo} />
              <Route path="/signIn" component={signIn} />
              <Route path="/signUp" component={signUp} />
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
