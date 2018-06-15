import React, { Component } from 'react';
import Header from './Header';
import * as utils from './utils';
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null,
        };
    }

    componentDidMount() {
        this.fetchUserDetails();
    }

    render() {
        const {info} = this.state;

        return (
            <div className='Main'>
                <Header
                    info={info}
                />
                <div className='Main-content'>
                </div>
            </div>
        );
    }

    fetchUserDetails() {
        utils.fetchUserDetails({ token: this.props.token })
            .then(info => {
                this.setState({ info })
            });
    }
}

export default Main;