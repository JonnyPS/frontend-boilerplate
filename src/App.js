import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: null
    }
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <p>Hello world...</p>
      </header>
      </div>
    );
  }
}

export default App;
