import React, { Component } from 'react';

class App extends Component {
  state = {
    joke: ''
  };

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke = async () => {
    const API_URL = 'https://icanhazdadjoke.com/';
    const API_CONFIG = { headers: { Accept: 'application/json' } };
    const request = await fetch(API_URL, API_CONFIG);
    const { joke } = await request.json();

    this.setState({ joke });
  }

  render() {
    const { joke } = this.state;

    return (
      <div>
        <h1>RTL - Mocks & Inputs</h1>

        <p data-testid="joke-message">{joke}</p>
        <button 
          data-testid="joke-button"
          onClick={this.fetchJoke}
        >
          New joke
        </button>
      </div>
    );
  }
}

export default App;
