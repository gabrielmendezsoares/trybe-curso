import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
  state = {
    name: '',
    password: '',
    about: '',
    sex: '',
    agree: false
  };

  handleChange = ({ target }) => {
    let { name, type, value } = target;

    if (type === 'checkbox') {
      value = target.checked;
    }

    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <form>


        <fieldset>
          <label htmlFor="">Name</label>
          <Input name="name" type="text" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Password</label>
          <Input name="password" type="password" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Sex</label>
          <select name="sex" value="" onChange={this.handleChange} >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="about">About</label>
          <TextArea name="about" cols="10" rows="30" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Agree</label>
          <Input name="agree" type="checkbox" onChange={this.handleChange} />
        </fieldset>
      </form>
    );
  }
}

export default Form;
