import React from "react";

const LOW_WIDTH = 1120;

function withWindowSizeLoad(Component) {
  class WithWindowResize extends React.Component {
    state = {
      isLow: false
    };
    componentDidMount() {
      window.addEventListener("load", this.handleWindowResize());
    }

    componentWillUnmount() {
      window.removeEventListener("load", this.handleWindowResize());
    }

    handleWindowResize = () => {
      this.setState({
        isLow: window.innerWidth < LOW_WIDTH
      });
      console.log("window.innerWidth", window.innerWidth, this.state);
    };

    render() {
      const { isLow } = this.state;
      return (
        <div>
          {isLow ? (
            <div>Данное приложение на вашем экране не работает</div>
          ) : (
            <Component {...this.props} />
          )}
        </div>
      );
    }
  }

  WithWindowResize.displayName = `WithWindowResize(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return WithWindowResize;
}

export default withWindowSizeLoad;
