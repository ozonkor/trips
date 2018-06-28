import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/TripFromCountries.css';


export default class TripsFromCountry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tripsFromCountry: [],
        };
    }

    fetchTripFromCountries() {
        const {token} = this.props;
        axios.get(`https://applications-uj-server.herokuapp.com/trips?country_id=1`)
            .then(response => {
                this.setState({
                    tripsFromCountry: response.data,
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchTripFromCountries();
    }

    render () {
        return (
            <div className="tripFromCountries">
                <h1>Trip from {this.state.tripsFromCountry.map((trip) => trip.name)}</h1>
                <hr />
                <ul className="tripFromCountries-list">
                    {
                        this.state.tripsFromCountry.map((trip) =>
                            <li
                                key={trip.id}
                            >
                                <a href={`http://onet.pl`} className="tripFromCountries-list-href">{trip.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
