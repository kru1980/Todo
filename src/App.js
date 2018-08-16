import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Home from './pages/Home';





class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Toolbar />
          <Content>
            <Route path="/" component={Home} />
          </Content>
        </div>
      </Router>



    )
  }
}

export default App;
