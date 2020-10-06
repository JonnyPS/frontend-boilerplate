import React, { Component } from 'react';
import './App.css';
import { GlobalNavigation } from "./components/basic-navigation.js"
import { Loader } from "./components/loader.js"
import { InstaFeedSummary } from "./components/insta-feed-summary.js"

const FEEDS_KEY = process.env.REACT_APP_FEEDS_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      instagramData: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/feeds/"+FEEDS_KEY+"/all")
    .then(response => response.json())  // convert to json
    .then((json) => {
      this.setState({
        dataLoaded: true,
        instagramData: json // set state
      })
      console.log(this.state)
    })    
    .catch(err => console.log('Request Failed', err)); // Catch errors
  }

  render() {
    let renderedView;
    if ( this.state.dataLoaded === false ) {
       renderedView = <Loader />
    } else {
      renderedView = <InstaFeedSummary dataStream={this.state} />
    }
    return (
      <div className="App">
      <header className="">
        <GlobalNavigation />
      </header>
      <div>
        {renderedView}
      
      
      </div>
      </div>
    );
  }
}

export default App;
