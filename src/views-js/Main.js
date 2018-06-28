import React, { Component } from 'react';
import Header from './Header'
import MyTrips from './MyTrips'
import NewTrip from './NewTrip'
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

  renderPage(page) {
    const {token} = this.props

    switch(page) {
      case 'dashboard':
        return <DashboardContainer />
      case 'myTrips':
        return <MyTrips token={token}/>
      case 'newTrip':
        const success = () => this.setState({page: 'myTrips'})
        return <NewTrip onNewTripSuccess={success}/>
      default:
        return <DashboardContainer />
    }
  }

  render() {
    const {info, page} = this.state
    return (
      <div>
        <Header
          info={info}
          onPageChange={this.handlePageChange.bind(this)}
          page={page}
        />
        {this.renderPage(page)}
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