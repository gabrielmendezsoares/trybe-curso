import React, { Component } from 'react';
import propTypes from 'prop-types';

class Input extends Component {
  render () {
    const { name, type, onChange } = this.props;

    return (
      <input name={name} type={type} onChange={onChange} />
    );
  }
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
};

export default Input;
