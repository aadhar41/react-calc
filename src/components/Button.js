import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        this.props.onClick(this.props.value);
    };

    render() {
        return (
            <button className="calc-button" onClick={this.handleClick}>
                {this.props.value}
            </button>
        );
    }
}

export default Button;