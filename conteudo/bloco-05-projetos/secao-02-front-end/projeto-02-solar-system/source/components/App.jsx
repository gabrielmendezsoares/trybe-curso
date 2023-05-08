import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';
import Missions from './Missions';
import '../../styles/App.css';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
