import React, { Component } from 'react';
import propTypes from 'prop-types';
import DateImg from '../../assets/Date.png';
import CountryImg from '../../assets/Country.png';
import DestinationImg from '../../assets/Destination.png';
import '../../styles/MissionCard.css';

class MissionCard extends Component {
  render () {
    const {
      name,
      year,
      country,
      destination,
    } = this.props;

    return (
      <div className='MissionCard'>
        <div className='MissionContainerName'>
          <p className='MissionName'>{name}</p>
        </div>

        <div className='MissionLine'></div>

        <div className='MissionContainerDescription'>
          <div className='MissionContainer-1'>
            <img className='MissionYearImg' src={DateImg} />
            <p className='MissionYear'>{year}</p>
          </div>

          <div className='MissionContainer-2'>
            <img className='MissionCountryImg' src={CountryImg} />
            <p className='MissionCountry'>{country}</p>
          </div>

          <div className='MissionContainer-3'>
            <img className='MissionDestinationImg' src={DestinationImg} />
            <p className='MissionDestination'>{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};

export default MissionCard;
