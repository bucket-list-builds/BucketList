import React, { Component } from 'react';
import Axios from 'axios'
import Navigation from './components/functional/Navigation';
import BucketPage from './components/view/bucketPage';
import './App.scss';
import AddItemForm from './components/functional/addItemForm';
import LoginPage from './components/view/loginPage';

import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bucketList: [
        { itemTitle: 'Test', itemText: 'Test Data', id: 0, completed: false },
        {
          itemTitle: 'Test Next',
          itemText: 'Test Data Next',
          id: 1,
          completed: true
        }
      ],
      isOwner: true,
      isLoggedIn: true,
      itemTitle: ``,
      itemText: ``
    };
  }

  componentDidMount() {
    Axios.get('https://bucketlist-builds.herokuapp.com/users/${id}/bucketlist')
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

  render() {
    return (
      <div className='App'>
        <Navigation isLoggedIn={this.state.isLoggedIn} />
        <AddItemForm
          itemTitle={this.state.itemTitle}
          itemText={this.state.itemText}
          textInputHandler={this.textInputHandler}
          addNewItem={this.addNewItem}
        />
        <Route path='/users/:id/bucketlist' render={ props => <BucketPage {...props} bucketList={this.state.bucketList} completionToggle={this.toggleHandler} isOwner={this.state.isOwner} />} />
        <LoginPage />
      </div>
    );
  }
}

export default App;
