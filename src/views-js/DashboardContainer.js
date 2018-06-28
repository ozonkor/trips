import React, { Component } from 'react'
import ContinentsContainer from './ContinentsContainer'
import TripsContainer from './TripsContainer'
import '../index.css';

class ShopContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedContinentID: 1,
    }
  }

  onContinentSelect(category) {
    this.setState({
      selectedContinentID: category.id
    });
  }

  render () {
    const {selectedContinentID} = this.state

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
            <TripsContainer
              selectedContinentID={selectedContinentID}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopContainer;
