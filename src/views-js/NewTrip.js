import React from 'react';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import axios from 'axios'
import _ from 'lodash'


class NewTrip extends React.Component {
  state = { name: '', description: '', continent_id: '', continents: []};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleSubmit(event) {
    const {onNewTripSuccess ,token} = this.props

    axios({
      method: 'post',
      url: `https://applications-uj-server.herokuapp.com/trips?token=${token}`,
      data: {
        name: this.state.name,
        description: this.state.description,
        continent_id: this.state.continent_id
      }
    })
      .then(function(response) {
        onNewTripSuccess()
      })
    event.preventDefault();
  }


  componentDidMount() {
    axios.get("https://applications-uj-server.herokuapp.com/continents")
      .then(response => {
        this.setState({
          continents: _.map(response.data, (continent) => (
            { value: continent.id, label: continent.name}
            )
          )
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <section>
                <Input type='text' label='Name' name='name' required value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={10} />
                <Input type='text' label='Description' name='description' required value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
                <Dropdown
                  auto
                  onChange={this.handleChange.bind(this, 'continent_id')}
                  source={this.state.continents}
                  value={this.state.continent_id}
                />
                <br/>
                <Input type="submit" value="Submit" />
              </section>
            </form>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}
export default NewTrip;

