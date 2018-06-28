import React from 'react';
import Input from 'react-toolbox/lib/input';
import axios from 'axios'

class NewTrip extends React.Component {
  state = { name: '', description: ''};

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
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <section>
                <Input type='text' label='Name' name='name' required value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={10} />
                <Input type='text' label='Description' name='Description' required value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
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

