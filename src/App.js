import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { GlobalNavigation } from "./components/basic-navigation.js"
import { Loader } from "./components/loader.js"
import { InstaFeedSummary } from "./components/insta-feed-summary.js"
import { CollegeFeed } from "./components/college-feed.js"
import { Search } from "./components/Search.js"



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
    document.body.classList.add('dark--theme');

    fetch("https://api.arts.ac.uk/instagram/feeds/2EEYr9s0vlbyHO7OokJPD/all")
    // .then((response) => console.log(response))
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
        <main>
          <BrowserRouter>
            <Switch>
                <Route path='/' exact render={(props) => (
                  <InstaFeedSummary data={this.state} />
                )} />
                <Route path='/feed/:slug' render={(props) => (
                  <CollegeFeed data={this.state} />
                )} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
