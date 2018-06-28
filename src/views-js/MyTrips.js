import React from 'react';
import axios from 'axios'
import Trip from './Trip'

class MyTrips extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
          trips: []
      }
  }

  fetchTrips() {
    const {token} = this.props
    axios.get(`https://applications-uj-server.herokuapp.com/trips/my_trips?token=${token}`)
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

  componentDidMount () {
    this.fetchTrips()
  }

  render () {
      const {trips} = this.state
    return (
        <div className="container-fluid dashboard">
            <div className="row">

                <div className="col-sm-12">
                  <div className="row">
                    {trips.map(trip => {
                      return (<Trip showTrip={() => {}} trip={trip} key={trip.id}/>)
                    })}
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
export default MyTrips;

