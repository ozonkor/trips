import React from 'react';
import axios from 'axios'

class MyTrips extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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

  componentDidMount () {
    this.fetchTrips()
  }

  render () {
    return (
      <div className="row" style={{padding: 100, display: "inline"}}>
        <h1>My Trips</h1>
        <ul style={{"list-style": "none"}}>
          {
            this.state.trips.map((trip) =>
              <li
                key={trip.id}
              >
                {trip.name}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
export default MyTrips;

