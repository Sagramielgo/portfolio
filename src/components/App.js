import '../stylesSheet/App.scss';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import Projects from './Projects/Projects';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
