import React, { Component } from 'react';
import Navigation from './components/functional/Navigation';
import BucketPage from './components/view/bucketPage';
import './App.scss';
import AddItemForm from './components/functional/addItemForm';
import LoginPage from './components/view/loginPage';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
      itemTitle: ``,
      itemText: ``
    };
  }

  textInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = (event) => {
    event.preventDefault();
    if (this.state.newItem !== '') {
      axios
        .post('https://bucketlist-builds.herokuapp.com/users/1/bucketlist', {title: this.state.itemTitle, description: this.state.itemText}
        )
        .then()
        .catch(err => console.log('Post Error on Add New Item', err));
    }
  };
  toggleHandler = event => {
    const toggledArray = [...this.state.bucketList];
    let position = null;

    const target = toggledArray.find((cur, index) => {
      position = index;
      return (
        cur.id === Number.parseInt(event.target.getAttribute('data-key'), 10)
      );
    });

    target.completed === false
      ? (target.completed = true)
      : (target.completed = false);

    toggledArray[position] = target;

    this.setState({ bucketList: toggledArray });
  };

  render() {
    return (
      <div className='App'>
        <Navigation isLoggedIn={this.state.isLoggedIn} />

        <Route
          exact
          path='/users/:id/bucketlist'
          render={props => (
            <BucketPage {...props} completionToggle={this.toggleHandler} />
          )}
        />
        <Route
          path='/users/:id/bucketlist/add-item'
          render={props => {
            return (
              <>
                <AddItemForm
                  itemTitle={this.state.itemTitle}
                  itemText={this.state.itemText}
                  textInputHandler={this.textInputHandler}
                  addNewItem={this.addNewItem}
                />
                <BucketPage {...props} completionToggle={this.toggleHandler} />
              </>
            );
          }}
        />

        <LoginPage />
      </div>
    );
  }
}

export default App;
