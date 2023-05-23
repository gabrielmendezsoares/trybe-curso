import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render () {
    return (
      <>
        <h1>Exercise - Frontend content</h1>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
