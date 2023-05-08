import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0
    };

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne () {
    const { buttonOne } = this.state;

    this.setState((lastState) => ({
      buttonOne: lastState.buttonOne + 1,
    }), () => {
      console.log(`Button 1 ${this.getButtonColor(buttonOne)}`);
    });
  }

  handleButtonTwo () {
    const { buttonTwo } = this.state;

    this.setState((lastState) => ({
      buttonTwo: lastState.buttonTwo + 1,
    }), () => {
      console.log(`Button 2 ${this.getButtonColor(buttonTwo)}`);
    });
  }

  handleButtonThree () {
    const { buttonThree } = this.state;

    this.setState((lastState) => ({
      buttonThree: lastState.buttonThree + 1,
    }), () => {
      console.log(`Button 3 ${this.getButtonColor(buttonThree)}`);
    });
  }

  getButtonColor (count) {
    return (count % 2 === 0) ? 'green' : 'white';
  }

  render () {
    const { buttonOne, buttonTwo, buttonThree } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleButtonOne} style={{ backgroundColor: this.getButtonColor(buttonOne) }}>
          {`Clicks button 1: ${buttonOne}`}
        </button>

        <button type="button" onClick={this.handleButtonTwo} style={{ backgroundColor: this.getButtonColor(buttonTwo) }}>
          {`Clicks button 2: ${buttonTwo}`}
        </button>

        <button type="button" onClick={this.handleButtonThree} style={{ backgroundColor: this.getButtonColor(buttonThree) }}>
          {`Clicks button 3: ${buttonThree}`}
        </button>
      </div>
    );
  }
}

export default App;
