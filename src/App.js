import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main/';
import AppBar from './components/AppBar/';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
          <AppBar
            position='sticky'
          />
          <Main/>
      </div>
    );
  }
}

export default App;
