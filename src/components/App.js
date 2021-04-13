import '../stylesSheet/App.scss';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import React from 'react';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
