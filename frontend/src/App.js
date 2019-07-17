import React, {Component} from 'react';

import Navigation from './components/functional/Navigation'
import './App.scss';
import LoginPage from './components/view/loginPage';
import RegistrationPage from './components/view/registrationPage'
import { Route, withRouter } from "react-router-dom"

class App extends Component {
  constructor() {
    super();
    this.state = {
      bucketList: []
    }
  }
render() {
    return (
      <div className="App">
        <Navigation />
        <LoginPage />
        <RegistrationPage />
      </div>
    );
  }  
}

export default withRouter(App);
