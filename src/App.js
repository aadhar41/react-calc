import React, { Component } from 'react';
import Button from "./components/Button";

class App extends Component {

  // Constructor is not needed if you are not using state initialization or binding methods
  constructor(props) {
    super(props);
    this.state = {
      current: '0',
      previous: '',
      operator: ''
    };
  }

  render() {
    const buttons = [
      { symbol: 'C', cols: '3', action: this.reset }, // Reset button
      { symbol: '7', cols: '1', action: this.addToCurrent },
      { symbol: '8', cols: '1', action: this.addToCurrent },
      { symbol: '9', cols: '1', action: this.addToCurrent },
      { symbol: '/', cols: '1', action: this.addToCurrent },
      { symbol: '4', cols: '1', action: this.addToCurrent },
      { symbol: '5', cols: '1', action: this.addToCurrent },
      { symbol: '6', cols: '1', action: this.addToCurrent },
      { symbol: '*', cols: '1', action: this.addToCurrent },
      { symbol: '1', cols: '1', action: this.addToCurrent },
      { symbol: '2', cols: '1', action: this.addToCurrent },
      { symbol: '3', cols: '1', action: this.addToCurrent },
      { symbol: '-', cols: '1', action: this.addToCurrent },
      { symbol: '.', cols: '1', action: this.addToCurrent },
      { symbol: '0', cols: '2', action: this.addToCurrent }, // 0 button spans 2 columns
      { symbol: '=', cols: '1', action: this.addToCurrent }, // Equals button
      { symbol: '+', cols: '1', action: this.addToCurrent }// Plus button
    ];

    return (
      <div className="App">
        <div className="calc-buttons">
          {buttons.map((button, index) => (
            <Button
              key={index}
              cols={button.cols}
              value={button.symbol}
              symbol={button.symbol}
              action={() => button.action}
            />
          ))}
        </div>

      </div>
    );
  }
  reset = () => {
    // Reset the calculator state
    this.setState({
      current: '',
      previous: '',
      operator: ''
    });
  };

  addToCurrent = (symbol) => {
    this.setState({ current: this.state.current + symbol });
    // Handle button click logic here
    console.log(`Button clicked: ${symbol}`);
    // Update state or perform calculations as needed
  };

  handleButtonClick = (value) => {
    // Handle button click logic here
    console.log(`Button clicked: ${value}`);
    // Update state or perform calculations as needed
  };
}
// App.js - Main application component
// This component renders the calculator buttons and handles button clicks
// It also displays the current, previous, and operator values
// Importing React and Component from 'react'
// Importing Button component from components/Button.js


export default App;
