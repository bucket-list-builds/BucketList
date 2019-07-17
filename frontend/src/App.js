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

  // https://bucketlist-builds.herokuapp.com/home

  componentDidMount() {
<<<<<<< Updated upstream
    this.setState({ isLoggedIn: false });
=======
    Axios.get('https://bucketlist-builds.herokuapp.com/home/')
      .then(response => {
        console.log(response.data);
        const apiArr = response.data;
        apiArr.map(todoItem => {
          this.setState({ bucketList: [...this.state.bucketList, todoItem] });
        });
        // this.setState({ bucketlist: [...this.state.bucketList, response.data] });
        console.log(this.state.bucketList);
      })
      .catch(error => {
        console.log(error);
      })
>>>>>>> Stashed changes
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
