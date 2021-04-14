import '../stylesSheet/App.scss';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import Projects from './Projects/Projects';
import AboutMe from './Bio/AboutMe';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about-me" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
