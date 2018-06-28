import React, { Component } from 'react';
import Header from './Header'
import DashboardContainer from './DashboardContainer'
import * as utils from '../utils';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      page: 'dashboard',
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  handlePageChange(page) {
    this.setState({
      page: page,
    })
  }

  fetchUserDetails() {
    utils.fetchUserDetails({ token: this.props.token })
      .then(info => {
        this.setState({ info })
      });
  }

  render() {
    const {info, page} = this.state
    const {token} = this.props
    return (
      <div>
        <Header
          info={info}
          onPageChange={this.handlePageChange.bind(this)}
        />
        <DashboardContainer />
        <footer className="container-fluid">
          <nav className="navbar fixed-bottom">
            Copyright &copy; Janek Kurzydlo & Dominik Bujas 2018
          </nav>
        </footer>
      </div>
    );
  }
}

export default Main;