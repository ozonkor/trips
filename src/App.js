import React, { Component } from 'react';
import logo from './logo.svg';
// import Button from 'react-toolbox/lib/button/Button';

import { getQueryParams } from './utils';
import Login from './views-js/Login';
import Main from './views-js/Main';
import './App.css';

class App extends Component {
    constructor() {
        super();

        const params = getQueryParams();
        this.state = { token: params.token };
    }

    isLoggedIn() {
        return !!this.state.token;
    }

    render() {
        return (
            <div className='App'>
                {this.isLoggedIn()
                    ? <Main token={this.state.token} />
                    : <Login />
                }
            </div>
        );
    }
}

export default App;
