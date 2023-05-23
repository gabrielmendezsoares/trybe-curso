import React, { Component } from 'react';
import Image from './Image';
import cat from '../assets/cat.jpg';

const imageText = 'Cute cat staring';

class App extends Component {
  render () {
    return (
      <main>
        <Image source={cat} alternativeText={imageText} />
      </main>
    );
  }
}

export default App;
