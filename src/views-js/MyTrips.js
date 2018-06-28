import React from 'react';
import axios from 'axios'
import Trip from './Trip'
import ContinentsContainer from './ContinentsContainer'
import TripsContainer from './TripsContainer'
import TripView from './TripView'

class MyTrips extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
          selectedContinentID: 1,
          selectedTrip: undefined,
          trips: []
      }
  }

  fetchTrips() {
    const {token} = this.props
    axios.get(`https://applications-uj-server.herokuapp.com/my_trips?token=${token}`)
      .then(response => {
        this.setState({
          trips: response.data,
        })
      })
      .catch(error => console.log(error))
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

  componentDidMount () {
    this.fetchTrips()
  }

  render () {
      const {
          selectedContinentID,
          trips,
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
                <div>
                    <TripsContainer
                        trips={trips}
                    />
                </div>
            </div>
        </div>
    )
  }
}
export default MyTrips;

