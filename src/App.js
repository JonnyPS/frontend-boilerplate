import React, { Component } from 'react';
import './App.css';
import { GlobalNavigation } from "./components/basic-navigation.js"

const FEEDS_KEY = process.env.REACT_APP_FEEDS_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/feeds/"+FEEDS_KEY+"/all")
    .then(response => response.json())  // convert to json
    .then((json) => {
      this.setState({
        instagramData: json // set state
      })
      console.log(this.state)
    })    
    .catch(err => console.log('Request Failed', err)); // Catch errors
  }

  render() {

    return (
      <div className="App">
      <header className="App-header">
        <GlobalNavigation />
      </header>
      </div>
    );
  }
}

export default App;
