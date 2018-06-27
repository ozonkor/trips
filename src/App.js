import React, { Component } from 'react';

import { getQueryParams } from './utils';
import Login from './views-js/Login';
import Main from './views-js/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import AddTravelForm from './views-js/AddTravelForm';
import Continents from './views-js/Continents';
import './App.css';
import TripsFromCountry from "./views-js/TripsFromCountry";
import Trip from "./views-js/Trip";

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
                <Navbar dark color="primary">
                    <NavbarBrand> Tirps </NavbarBrand>
                </Navbar>
                <Login />
                <AddTravelForm getTravel={this.getTravel}/>
                <Continents />
                <TripsFromCountry/>
                <Trip/>
            </div>
        );
    }
}

export default App;
