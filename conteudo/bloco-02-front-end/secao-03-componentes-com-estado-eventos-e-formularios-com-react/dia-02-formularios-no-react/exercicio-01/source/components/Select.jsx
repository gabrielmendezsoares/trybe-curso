import React, { Component } from 'react';
import propTypes from 'prop-types';

class Select extends Component {
  render () {
    const { value, content } = this.props;

    return (
      <select value={value} >{content}</select>
    );
  }
}

Select.propTypes = {
  value: propTypes.string.isRequired,
  content: propTypes.string.isRequired
};

export default Select;
