import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import './LoginButton.css';

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = 'a4d051aa767e07011a2f'
const scope = 'user'

class LoginButton extends Component {
  render() {
    return (
      <Button
        raised
        accent
        href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
      >
        {' '}
        Login with GitHub
      </Button>
    );
  }
}

export default LoginButton;