import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../../styles/PlanetCard.css';

class PlanetCard extends Component {
  render () {
    const { planetName, planetImage } = this.props;

    return (
      <div className="PlanetCard">
        <div className="PlanetCardContainer">
          <div className='PlanetLine'></div>
          <img className={`${planetName} Planet`} src={planetImage} alt={`Planeta ${planetName}`} />
        </div>

        <p className="PlanetName">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
