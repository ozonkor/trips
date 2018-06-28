import React, { Component } from 'react'
import ContinentsContainer from './ContinentsContainer'
import TripsContainer from './TripsContainer'
import TripView from './TripView'
import '../index.css';

class ShopContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedContinentID: 1,
      selectedTrip: undefined,
    }
  }

  onContinentSelect(category) {
    this.setState({
      selectedContinentID: category.id,
      selectedTrip: undefined,
    });
  }

  onTripSelect(trip) {
    this.setState({
      selectedTrip: trip
    });
  }

  render () {
    const {
      selectedContinentID,
      selectedTrip
    } = this.state

    return (
      <div className="container-fluid dashboard">
        <div className="row">

          <div className="col-lg-3">
            <ContinentsContainer
              selectedContinentID={selectedContinentID}
              onContinentSelect={this.onContinentSelect.bind(this)}
            />
          </div>

          <div className="col-lg-9">
            {!selectedTrip ? <TripsContainer
              selectedContinentID={selectedContinentID}
              onTripSelect={this.onTripSelect.bind(this)}
            /> :
              <TripView
                selectedTrip={selectedTrip}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ShopContainer;
