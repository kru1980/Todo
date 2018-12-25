import React, { Component } from "react";

const LOW_WIDTH = 666;

export default class RescponsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isLow: false };
  }

  componentDidMount() {
    window.addEventListener("load ", this.handleWindowResize());
  }

  componentWillUnmount() {
    window.removeEventListener("load ", this.handleWindowResize());
  }

  handleWindowResize = () => {
    console.log("window.innerWidth", window.innerWidth);

    this.setState({
      isLow: window.innerWidth < LOW_WIDTH
    });
  };
  render() {
    const { isLow } = this.state;
    return (
      <div>
        {isLow ? (
          <div
            className="block_small"
            style={{ width: 200, height: 200, background: "red" }}
          />
        ) : (
          <div
            className="block_big"
            style={{ width: 400, height: 400, background: "green" }}
          />
        )}
      </div>
    );
  }
}
