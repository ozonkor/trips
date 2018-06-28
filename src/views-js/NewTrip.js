import React from 'react';

class NewTrip extends React.Component {

  handleSubmit(event) {
    axios({
      method: 'post',
      url: 'https://applications-uj-server.herokuapp.com/trips',
      data: {
        firstName: this.state.name,
        lastName: this.state.description
      }
    });
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

