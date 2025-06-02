import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        this.props.onClick(this.props.value);
    };

    render() {
        return (
            <div className={`calc-button ${this.props.cols ? `cols-${this.props.cols}` : ''}`}>
                <button className="calc-button" onClick={() => this.props.action(this.props.symbol)} cols={this.props.cols} style={this.props.style}>
                    {this.props.symbol}
                </button>
            </div>
        );
    }
}

export default Button;