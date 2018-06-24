import React from "react";

class addTravelForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getTravel}>
                <input type ="text" name = "continent" placeholder="Continent.."/>
                <input type ="text" name = "city" placeholder="City.."/>
                <button>Get City</button>
            </form>
        );
    }
};

export default addTravelForm;