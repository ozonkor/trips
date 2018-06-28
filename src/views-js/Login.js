import React, { Component } from 'react';
import LoginButton from './LoginButton';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">
            Trip share
          </h2>
          <p className="Login-intro">
            An app to share trips
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;