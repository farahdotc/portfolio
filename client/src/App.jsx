import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Resume from './components/Resume';
import About from './Pages/AboutP';
import Projects from './Pages/Projects';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
