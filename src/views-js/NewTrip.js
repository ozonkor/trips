import React from 'react';
import Input from 'react-toolbox/lib/input';
import axios from 'axios'

class NewTrip extends React.Component {
  state = { name: '', description: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleSubmit(event) {
    const {onNewTripSuccess} = this.props

    axios({
      method: 'post',
      url: 'https://applications-uj-server.herokuapp.com/trips',
      data: {
        name: this.state.name,
        description: this.state.description
      }
    })
      .then(function(response) {
        onNewTripSuccess()
      })
    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <section>
          <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={10} />
          <Input type='text' label='Description' name='Description' value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
          <Input type="submit" value="Submit" />
        </section>
      </form>
    );
  }
}
export default NewTrip;

