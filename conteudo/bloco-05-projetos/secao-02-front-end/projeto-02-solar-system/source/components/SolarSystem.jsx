import React, { Component } from 'react';
import PlanetList from '../../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';
import '../../styles/SolarSystem.css';

class SolarSystem extends Component {
  render () {
    return (
      <div className="SolarSystem">
        <Title headline="Planetas" />

        <div className="SolarSystemContainer">
          {PlanetList
            .map(({ name, image }) => (<PlanetCard
              key={name}
              planetName={name}
              planetImage={image}
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
