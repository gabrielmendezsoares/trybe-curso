import React, { Component } from 'react';
import Image from './Image';

const imageSource = '../assets/cat.jpg';
const imageText = 'Cute cat staring';

class App extends Component {
  render () {
    return (
      <main>
        <Image source={imageSource} alternativeText={imageText} />
      </main>
    );
  }
}

export default App;
