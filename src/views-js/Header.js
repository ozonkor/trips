import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import './Header.css';

class Header extends Component {
  handleClickLogOut() {
    window.location.href = window.location.href.replace(/\?.*$/, '');
  }

  render() {
    const {info, onPageChange, page} = this.props;

    return (
      <AppBar title='TRIPS SHARE'>
        <Navigation type='horizontal'>
          {info != null && (
            <span>
              <Avatar className='Header-userAvatar'
                      image={info.avatar_url}
              />
              <span className='Header-userName'>
                {info.name}
              </span>
            </span>
          )}
          <Link
            href='#'
            label='New Trip'
            className='Header-link'
            active={page === 'newTrip'}
            onClick={() => onPageChange('newTrip')}
          /> |
          <Link
            href='#'
            label='My Trips'
            className='Header-link'
            active={page === 'myTrips'}
            onClick={() => onPageChange('myTrips')}
          /> |
          <Link
            href='#'
            label='Dashboard'
            className='Header-link'
            active={page === 'dashboard'}
            onClick={() => onPageChange('dashboard')}
          /> |
          <Link
            href='#'
            label='Log out'
            className='Header-link'
            onClick={this.handleClickLogOut}
          />
        </Navigation>
      </AppBar>
    );
  }
}

export default Header;