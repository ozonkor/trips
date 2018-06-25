import React, { Component } from 'react';
import '../stylesheets/AddTravelForm.css';
import axios from 'axios';
import utils from '.././utils'

const baseApiUrl = 'https://applications-uj-server.herokuapp.com';

class AddTravelForm extends Component{

    constructor() {
        super();

    }

    state = {
        name: '',
        description: '',
        country: ''
    };
    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            name: "",
            description: "",
            country: "",
        });
        this.props.onChange({
            name: "",
            description: "",
            country: "",
        });

        alert(this.state.name);
        var bodyFormData = new FormData();
        bodyFormData.set("name", this.props.name);
        bodyFormData.set("description", this.props.description);
        bodyFormData.set("country", this.props.country);

        axios({
            method: 'post',
            url: baseApiUrl + "/addTrip",
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    onSubmit = () => {
        alert("dupa");
    };

    render(){
        return(
            <div className="addTravelForm">
                <form onSubmit={this.props.getTravel}>
                    <input name = "name" type ="text" placeholder="Name of trip" /> <br />
                    <input name = "country" type ="text"  placeholder="Country" /> <br />
                    <input name = "description" type ="text" placeholder="Describe of trip" /> <br />
                    <button onClick={() => this.onSubmit()}>Save trip</button>
                </form>
            </div>
        );
    }




};

export default AddTravelForm;