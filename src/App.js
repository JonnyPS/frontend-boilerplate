import React, { Component } from 'react';
import './App.css';

const FEEDS_KEY = process.env.REACT_APP_FEEDS_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: null
    }
  }

  componentDidMount() {
    fetch("localhost:8080/feeds/" + FEEDS_KEY + "/all")
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
