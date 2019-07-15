import React, { Component } from 'react';
import './SASS/App.scss';
import Navigation from './components/functional/Navigation';
// import bucketPage from './components/view/bucketPage';
import LoginPage from './components/view/LoginPage';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: null,
      username: '',
      password: '',
      storedUsers: []
    }
  }

  componentDidMount() {
    this.setState({ isLoggedIn: false });
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addUser = newUser => {
    this.setState({ storedUsers: [...this.state.storedUsers, newUser] });
  }

  render() {
    if (this.state.isLoggedIn === false) {
      return (
        <div className="App">
          <Navigation />
          <LoginPage 
            username={this.state.username}
            password={this.state.password}
            changeHandler={this.changeHandler}
            addUser={this.addUser}
          />
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <Navigation />
          {/* <BucketPage /> */}
        </div>
      );
    }
  }  
}

export default App;
