import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Toolbar from "./components/Toolbar/Toolbar";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <div className="main">
            <div className="content">
              <Content>
                <Route path="/" component={Home} />
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
