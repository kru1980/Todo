import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import fire from "./firebase";
import { Row, Col } from "antd";

import Toolbar from "./components/Toolbar/Toolbar";
import Content from "./components/Content";

import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";

import LoginAnt from "./pages/LoginAnt";
import Logout from "./pages/Logout";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  logout() {
    fire.auth().signOut();
    console.log(this.props);
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user }, () => this.props.history.push("/createTodo"));
        localStorage.setItem("user", user.id);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Toolbar user={this.state.user} />

        <div>
          <Row>
            <Col span={24}>
              <Content>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/createTodo" component={CreateTodo} />
                  <Route path="/login" component={LoginAnt} />

                  <Route
                    path="/logout"
                    render={props => <Logout onLogout={this.logout} />}
                  />
                </Switch>
              </Content>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
