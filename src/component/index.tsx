import React from "react";

interface WelcomeProps {
  special?: string;
}

class Welcome extends React.Component<WelcomeProps> {
  render() {
    return <h1>Hello, I was created as a React.Component and here is something special about me: {this.props.special}</h1>;
  }
}

export default Welcome;