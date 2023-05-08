import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    password: '',
    description: ''
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <form>
        <select name=""></select>
        <input name="name" type="text" onChange={this.handleChange} />
        <input name="password" type="password" onChange={this.handleChange} />
        <textarea name="description" cols="30" rows="10" onChange={this.handleChange} ></textarea>
      </form>
    );
  }
}

export default Form;
