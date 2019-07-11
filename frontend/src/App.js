import React, {Component} from 'react';

import Navigation from './components/functional/Navigation'
import './App.scss';

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
      </div>
    );
  }  
}

export default App;
