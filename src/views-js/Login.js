import React, { Component } from 'react';
import LoginButton from './LoginButton';
import '../stylesheets/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="Login-header">
                    <h2 className="Login-title">
                        My trips
                    </h2>
                    <p className="Login-intro">
                        An app to share with your trips.
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