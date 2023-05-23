import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../../styles/Header.css';

class Header extends Component {
  render () {
    const {
      cardNameFilter,
      cardRareFilter,
      cardTrunfoFilter,
      onInputChange
    } = this.props;

    return (
      <header className='header-main-container'>
        <h2 className='header-main-title'>Filtros de busca</h2>

        <nav className='header-filter-container'>
          <input
            className='header-filter-name'
            name='cardNameFilter'
            type='text'
            placeholder='Filtrar pelo nome...'
            value={cardNameFilter}
            disabled={cardTrunfoFilter}
            onChange={onInputChange}
          />

          <select
            className='header-filter-rare'
            name='cardRareFilter'
            value={cardRareFilter}
            disabled={cardTrunfoFilter}
            onChange={onInputChange}
          >
            <option value='todas'>Todas</option>
            <option value='normal'>Normal</option>
            <option value='raro'>Raro</option>
            <option value='muito raro'>Muito Raro</option>
          </select>

          <div className='header-trunfo-container'>
            <input
              id='trunfo-filter'
              className='header-filter-trunfo'
              name='cardTrunfoFilter'
              type='checkbox'
              checked={cardTrunfoFilter}
              onChange={onInputChange}
            />
            <label className='header-label-trunfo' htmlFor='trunfo-filter'>Super Trunfo</label>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  cardNameFilter: propTypes.string.isRequired,
  cardRareFilter: propTypes.string.isRequired,
  cardTrunfoFilter: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Header;
