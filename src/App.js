import React, { Component } from 'react';
import Button from "./components/Button";
import './css/style.css'; // Importing CSS for styling

class App extends Component {

  // Constructor is not needed if you are not using state initialization or binding methods
  constructor(props) {
    super(props);
    this.state = {
      current: '0',
      previous: [],
      operator: '',
      nextIsReset: false, // Flag to indicate if the next input should reset the current value
      result: 0 // Initial result value
    };
  }

  render() {
    const buttons = [
      { symbol: 'C', class: 'button-c', style: 'order: 1; flex-grow: 8', cols: '3', action: this.reset }, // Reset button
      { symbol: '/', class: '', cols: '1', style: 'order: 2', action: this.addToCurrent },
      { symbol: '*', class: '', cols: '1', style: 'order: 3', action: this.addToCurrent },
      { symbol: '7', class: '', cols: '1', style: 'order: 4', action: this.addToCurrent },
      { symbol: '8', class: '', cols: '1', style: 'order: 5', action: this.addToCurrent },
      { symbol: '9', class: '', cols: '1', style: 'order: 6', action: this.addToCurrent },
      { symbol: '4', class: '', cols: '1', style: 'order: 3', action: this.addToCurrent },
      { symbol: '5', class: '', cols: '1', style: 'order: 7', action: this.addToCurrent },
      { symbol: '6', class: '', cols: '1', style: 'order: 8', action: this.addToCurrent },
      { symbol: '1', class: '', cols: '1', style: 'order: 10', action: this.addToCurrent },
      { symbol: '2', class: '', cols: '1', style: 'order: 11', action: this.addToCurrent },
      { symbol: '3', class: '', cols: '1', style: 'order: 12', action: this.addToCurrent },
      { symbol: '-', class: '', cols: '1', style: 'order: 13', action: this.addToCurrent },
      { symbol: '0', class: '', cols: '2', style: 'order: 14', action: this.addToCurrent }, // 0 button spans 2 columns
      { symbol: '.', class: '', cols: '1', style: 'order: 15', action: this.addToCurrent },
      { symbol: '+', class: '', cols: '1', style: 'order: 16', action: this.addToCurrent }, // Plus button
      { symbol: '=', class: '', cols: '1', style: 'order: 17', action: this.calculate }, // Equals button
    ];

    return (
      <div className="App">
        <div className="calculator">
          {this.state.previous.length > 0 ?
            <div className="floaty-last">
              {this.state.previous[this.state.previous.length - 1]}
            </div>
            : null}
          <input type="text" name="result" className='display' id="result" value={this.state.current} readOnly />
          <div className="buttons-grid">
            {buttons.map((button, index) => (
              <Button
                key={index}
                cols={button.cols}
                value={button.symbol}
                symbol={button.symbol}
                action={(symbol) => button.action(symbol)}
              />
            ))}
          </div>
        </div>

      </div >
    );
  }

  reset = () => {
    // Reset the calculator state
    this.setState({
      result: 0,
      current: '0',
      previous: [],
      operator: '',
      nextIsReset: false
    });
  };

  addToCurrent = (symbol) => {
    let { current, previous, operator } = this.state;
    console.log(`addToCurrent Button clicked: `);
    console.log(`current: ${current}, previous: ${previous}, operator: ${operator}, symbol: ${symbol}`);

    if (["/", "*", "-", "+"].indexOf(symbol) > -1) {
      let { current, previous, operator } = this.state;
      // If the current value is '0', replace it with the operator
      console.log(`current: ${current}`);
      if (current === '0' && previous.length === 0) {
        current = ''; // Reset current if it's '0' and no previous operations
      }
      previous.push(current + symbol);
      this.setState({ previous, nextIsReset: true });
      // this.setState({ current });
      return; // Exit early if it's an operator
    } else {
      if ((this.state.current === '0' && symbol !== '.') || this.state.nextIsReset) {
        // If current is '0', replace it with the new symbol unless it's '.'
        this.setState({ current: symbol, nextIsReset: false });
      } else {
        // Otherwise, append the symbol to the current value
        this.setState({ current: this.state.current + symbol });
      }
    }
  };


  calculate = (symbol) => {
    // Handle button click logic here
    console.log(`calculate Button clicked: ${symbol} `);
    let { current, previous } = this.state;
    if (previous.length > 0) {
      const expression = eval(previous[previous.length - 1] + current); // Build the expression to evaluate
      try {
        // Evaluate the expression and update the state with the result
        // eslint-disable-next-line no-eval
        const result = eval(expression);
        this.setState({
          current: result.toString(),
          previous: [],
          operator: '',
          nextIsReset: true,
          result: result
        });
      } catch (e) {
        this.setState({ current: "Error", nextIsReset: true });
      }
      return;
    }


  };
}

export default App;
