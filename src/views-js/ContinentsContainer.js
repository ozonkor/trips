import React, { Component } from 'react';
import axios from 'axios';
import Continent from './Continent';

class ContinentsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      continents: []
    }
  }
  componentDidMount() {
    axios.get("https://applications-uj-server.herokuapp.com/continents")
      .then(response => {
        this.setState({
          continents: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {selectedContinentID} = this.props
    return (
      <div className="list-group">
        {this.state.continents.map(continent => {
          return(
            <Continent
              continent={continent}
              key={continent.id}
              selected={continent.id === selectedContinentID}
              onSelect={this.props.onContinentSelect}
            />
          )
        })}
      </div>
    )
  }
}

export default ContinentsContainer