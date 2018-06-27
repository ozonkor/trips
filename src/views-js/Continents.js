import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import * as utils from '../utils';
import '../stylesheets/continents.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import ListGroup from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap'
import {Media} from'reactstrap';

export default class Continents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            continents: [],
        };
    }

    fetchContinents() {
        const {token} = this.props;
        axios.get(`https://applications-uj-server.herokuapp.com/continents`)
            .then(response => {
                this.setState({
                    continents: response.data,
                });
                console.log(this.continents);
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchContinents();
    }



    render () {


        const continents = this.state.continents.map((continent) => {
            return(
                <div key={continent.id} className="col-12 mt-2">
                     <Media tag="li">
                         <Media body className="ml-5">
                             <Media heading>{continent.name}</Media>
                             {/*<p>{continent.trips}</p>*/}
                         </Media>
                     </Media>
                </div>
            );
        });

        return (
        <div className="continents">
            <h1>Continents</h1>
            <hr />
            <ul className="continents-list">
                <Media list>
                    {continents};
                </Media>
            {/*{*/}
                {/*this.state.continents.map((continent) =>*/}
                {/*<li*/}
                    {/*key={continent.id}*/}
                {/*>*/}
                    {/*<a href={`http://onet.pl`} className="continents-list-href">{continent.name}</a>*/}
                {/*</li>*/}
                {/*)*/}
            {/*}*/}
            </ul>
            </div>
        )
    }
}


{/*}*/}
{/*</ul>*/}
{/*</div>*/}
