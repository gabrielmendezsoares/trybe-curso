import React, { Component } from 'react';
import propTypes from 'prop-types';

class TextArea extends Component {
  render () {
    const { name, cols, rows, onChange } = this.props;

    return (
      <textarea name={name} cols={cols} rows={rows} onChange={onChange} ></textarea>
    );
  }
}

TextArea.propTypes = {
  name: propTypes.string.isRequired,
  cols: propTypes.string.isRequired,
  rows: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
};

export default TextArea;
