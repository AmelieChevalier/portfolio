import React from "react";
import Home from "./pages/Home";
import Admin from './pages/Admin';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Admin} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
