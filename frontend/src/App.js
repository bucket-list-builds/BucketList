import React, { Component } from 'react';
import Axios from 'axios'
import Navigation from './components/functional/Navigation';
import BucketPage from './components/view/BucketPage';
import AddItemForm from './components/functional/AddItemForm';
import LogOut from './components/view/LogOut';
import './App.scss';
import LoginPage from './components/view/LoginPage';
import RegistrationPage from './components/view/registrationPage'
import { Route, withRouter } from "react-router-dom"

class App extends Component {
  constructor() {
    super();
    this.state = {
      bucketList: [],
      users: [],
      isOwner: true,
      isLoggedIn: false,
      itemTitle: ``,
      itemText: ``
    };
  }

  componentDidMount() {
    //fetching/getting bucketlist from API.
    Axios.get('https://bucketlist-builds.herokuapp.com/home')
      .then(response => {
        // console.log(this.state.bucketList);
        this.setState({ bucketList: response.data });
        console.log(this.state.bucketList);
      })
      .catch(error => {
        console.log(error.response);
      });

    //fetching/getting users from API.
    Axios.get('https://bucketlist-builds.herokuapp.com/users')
      .then(response => {
        // console.log(this.state.users);
        this.setState({ users: response.data });
        console.log(this.state.users);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  textInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    if (this.state.newItem !== "") {
      this.setState(
        prevState => {
          return {
            bucketList: [...prevState.bucketList, {
              itemTitle: this.state.itemTitle,
              itemText: this.state.itemText,
              id: Date.now(),
              completed: false
            }],
            itemTitle: ``,
            itemText: ``
          };
        },
      );
    }
  };

  toggleHandler = event => {
    const toggledArray = [...this.state.bucketList]
    let position = null;
    
    const target = toggledArray.find((cur, index) => {
      position = index
      return cur.id === Number.parseInt(event.target.getAttribute('data-key'), 10)
    });

    target.completed === false ? target.completed = true : target.completed = false;
    
    toggledArray[position] = target;

    this.setState({bucketList: toggledArray});
  };

  signIn = (username, password, event) => {
    event.preventDefault();
    const result = this.state.users.find(user => {
      if (user.username === username) {
        console.log('User found!');
      }
      else {
        console.log('User not found!');
      }
    });
  }
  

  render() {
    return (

      
      
      <div className='App'>
        <Navigation isLoggedIn={this.state.isLoggedIn} />
        
        

          <Route 
          path="/"
          render={props => (
            <LogOut {...props} />
          )}
          />
          <Route
          path="/"
          render={props => (
            <LoginPage {...props} />
          )}
        />

          <Route
             path="/"

             render={props => (
               <RegistrationPage  {...props} />
             )}
           />

        <Route 
          exact path='/' 
          render={ props => 
            <BucketPage 
              {...props} 
              bucketList={this.state.bucketList} 
              completionToggle={this.toggleHandler} 
              isOwner={this.state.isOwner} 
            />
          } 
        />
      </div>
    );
  }
}

export default withRouter(App);
