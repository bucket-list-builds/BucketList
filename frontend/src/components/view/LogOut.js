import React, { Component } from "react";

class LogOut extends Component {
    
    handleLogout = (event) => {
        event.preventDefault();
    
        localStorage.removeItem('jwt');
        this.props.history.push('/')
      }

    render() {
        return (
            <li><button onClick={this.handleLogout}>Logout</button></li>
        )
    }

}

export default LogOut; 
 