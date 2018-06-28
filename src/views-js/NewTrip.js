import React from 'react';
import Input from 'react-toolbox/lib/input';


class NewTrip extends React.Component {
  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        <section>
          <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={10} />
          <Input type='text' label='Description' name='Descritpion' value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
          <Input type="submit" value="Submit" />
        </section>
      </form>
    );
  }
}
export default NewTrip;

