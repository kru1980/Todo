import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import LayOut from "./components/LayOut";
import Home from "./pages/Home/Home";
import CreateTodo from "./pages/CreateTodo";
import signIn from "./components/Auth/signIn";
import signUp from "./components/Auth/signUp";

import { Row, Col } from "antd";

import "./index.css";

class App extends Component {
  logout = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div className="App">
        <Toolbar />
        <div>
          <Row>
            <Col span={24}>
              <LayOut>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/createTodo" component={CreateTodo} />
                  <Route path="/signIn" component={signIn} />
                  <Route path="/signUp" component={signUp} />
                </Switch>
              </LayOut>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
