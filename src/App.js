import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import fire from "./firebase";

import Toolbar from "./components/Toolbar/Toolbar";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
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
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.id);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar user={this.state.user} />
          <div className="main">
            <div className="content">
              <Content>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PrivateRoute
                    path="/about"
                    component={About}
                    user={this.state.user}
                  />

                  <Route path="/login" component={Login} />
                  {/* <Route path="/logout" component={Logout} /> */}
                  <Route
                    path="/logout"
                    render={props => <Logout onLogout={this.logout} />}
                  />
                </Switch>
              </Content>
            </div>
            <div className="sideBar">
              <SideBar />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
