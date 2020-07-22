import React from "react";
import Home from "./pages/Home";
import Admin from './pages/Admin';

import Project from './pages/Project';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Admin} />
          <Route exact path='/project/:id' component={Project} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
