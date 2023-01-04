import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.age,
    };
  }

  addAge = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>{this.props.name}, {this.props.lastname}</h1>
        <p>Age: {this.state.count}</p>
        <p>Hair Color: {this.props.hair}</p>
        <button onClick={this.addAge}>
          Birthday Button for {this.props.name} {this.props.lastname}
        </button>
      </>
    );
  }
}

export default PersonCard;