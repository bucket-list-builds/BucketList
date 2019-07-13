import React, { Component } from 'react';

import Navigation from './components/functional/Navigation';
import BucketPage from './components/view/bucketPage';
import './App.scss';
import AddItemForm from './components/functional/addItemForm';
import LoginPage from './components/view/loginPage';

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
      isLoggedIn: true,
      itemTitle: ``,
      itemText: ``
    };
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
        <BucketPage bucketList={this.state.bucketList} />
        <LoginPage />
      </div>
    );
  }
}

export default App;
