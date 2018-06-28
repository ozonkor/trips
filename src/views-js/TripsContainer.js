import React, { Component } from 'react'
import axios from 'axios'
import Trip from './Trip'

class TripsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trips: []
    }
  }

  fetchTrips() {
    const {selectedContinentID} = this.props
    axios.get('https://applications-uj-server.herokuapp.com/trips', {
      params: {
        continent_id: selectedContinentID
      }
    })
      .then(response => {
        this.setState({
          trips: response.data,
          currentContinentID: selectedContinentID
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount () {
    this.fetchTrips()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const {currentContinentID} = prevState
    const {selectedContinentID} = this.props

    if (currentContinentID !== selectedContinentID){
      this.fetchTrips()
    }
  }


  render () {
    const {onTripSelect} = this.props

    return (
      <div className="row">
        {this.state.trips.map(trip => {
          return (<Trip showTrip={onTripSelect} trip={trip} key={trip.id}/>)
        })}
      </div>
    )
  }
}

export default TripsContainer