import React, { Component } from "react";

class LogOut extends Component {
  handleLogout = event => {
    event.preventDefault();

    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };

  render() {
    return <button onClick={this.handleLogout}>Logout</button>;
  }
}

export default LogOut;
