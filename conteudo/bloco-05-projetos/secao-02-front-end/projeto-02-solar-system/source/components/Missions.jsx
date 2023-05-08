import React, { Component } from 'react';
import '../../styles/Missions.css';
import MissionList from '../../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends Component {
  render () {
    return (
      <div className="Missions">
        <div className='MissionsContainer'>
          <Title headline="Missões" />

          <div className="MissionListContainer">
            {MissionList
              .map(({ name, year, country, destination }) => (<MissionCard
                key={name}
                name={name}
                year={year}
                country={country}
                destination={destination}
              />)
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
