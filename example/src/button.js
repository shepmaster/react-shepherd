import React, { Component } from 'react';

export default class Button extends Component {
  componentDidMount() {
    this.props.startTour();
  }

  render() {
    return (
      <button className="button dark" onClick={this.props.startTour}>
        Start Tour
      </button>
    );
  }
}
