import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red", name: "Honda" };
  }
  render() {
    return (
      <h2>
        I am a {this.state.color} {this.state.name} Car!
      </h2>
    );
  }
}

export default Car;
