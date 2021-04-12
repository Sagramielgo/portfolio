import React, { Component } from 'react';
import logo from '../images/s-icon.png';
import '../stylesSheet/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My PortFolio</h1>
          <div className="copy">
            <a
              className="firmLink"
              href="https://github.com/Sagramielgo"
              target="_blank"
              rel="noreferrer"
            >
              <small className="copy">
                By #gitFuntastic&nbsp;
                <span>
                  <i className="fas fa-paw "></i>
                </span>
                &nbsp;2021
              </small>
            </a>
          </div>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
