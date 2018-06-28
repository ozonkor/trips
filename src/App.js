import React, { Component } from 'react'
import './App.css'
import Main from './views-js/Main'
import {getQueryParams} from './utils'

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render () {
    return (
      <div className="App" id="app">
        <Main token={this.state.token} />
      </div>
    );
  }
}

export default App;
