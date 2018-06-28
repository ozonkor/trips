import React, { Component } from 'react';
import axios from 'axios';


export default class UserTrips extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userTrips: [],
        };
    }

    fetchUserTrips() {
        const {token} = this.props;
        axios.get(`https://applications-uj-server.herokuapp.com/my_trips?token=`+token)
            .then(response => {
                this.setState({
                    userTrips: response.data,
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchUserTrips();
    }

    render () {
        return (
            <div className="userTrips">
                <h1>Trip from {this.state.userTrips.map((trip) => trip.name)}</h1>
                <hr />
                <ul className="userTrips-list">
                    {
                        this.state.userTrips.map((trip) =>
                            <li
                                key={trip.id}
                            >
                                <a href={`http://onet.pl`} className="userTrips-list-href">{trip.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
