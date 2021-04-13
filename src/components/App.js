import '../stylesSheet/App.scss';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
