import React, {Component} from 'react';

import Navigation from './components/functional/Navigation'
import './App.scss';
import LoginPage from './components/view/loginPage';

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
      </div>
    );
  }  
}

export default App;
