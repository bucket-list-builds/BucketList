<<<<<<< HEAD
import React, { Component } from 'react';
import './SASS/App.scss';

=======
import React, {Component} from 'react';

import Navigation from './components/functional/Navigation'
import './App.scss';

>>>>>>> origin/benjamin-quackenbush
class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1>Here's your App component!</h1>
      </div>
    );
  }
=======
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
>>>>>>> origin/benjamin-quackenbush
}

export default App;
