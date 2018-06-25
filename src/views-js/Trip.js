import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Trip.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


export default class Trip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trip: [],
        };
    }

    fetchTrip() {
        const {token} = this.props;
        axios.get(`https://applications-uj-server.herokuapp.com/trips/1`)
            .then(response => {
                this.setState({
                    trip: response.data,
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchTrip();
    }

    render () {
        return (
            <div className="trip">
                <h1>Trip from {this.state.trip.name}</h1>
                <hr />
                <ul className="trip-list">
                    {
                        <a href={`http://onet.pl`} className="trip-list-href">{this.state.trip.name}</a>
                    }
                </ul>
            </div>
        )
    }
}
