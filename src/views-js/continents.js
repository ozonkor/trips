import React, { Component } from 'react';
import Header from './Header';
import * as utils from '../utils';
import '../stylesheets/continents.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null,
        };
    }

    fetchContinents() {
        const {token} = this.props
        axios.get(`https://applications-uj-server.herokuapp.com/continents`)
            .then(response => {
                this.setState({
                    continents: response.data,
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchContinents();
    }

    render () {

        return (
            <div className="row my-continents" style={{padding: 100, display: "inline"}}>
                <h1>Continents</h1>
                <ul style={{"list-style": "none"}}>
                    {
                        this.state.continents.map((continent) =>
                            <li
                                key={continent.id}
                            >
                                <p>Continent ID: {continent.id} Items:</p>                                <hr />
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Main;