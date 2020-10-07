import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { Loader } from "./loader";

export class InstaFeedSummary extends Component {
  render() {

    // console.log('props', this.props.dataStream.instagramData)
    console.log('props route', this.props.data)

    if ( this.props.data.dataLoaded === false ) {
      return ( <Loader /> )
    } 

    return (
      <div className="grid-container-25 instagram-feed-container">
        <div className="grid-col-full-inner">
          <h1>Instagram Feeds</h1>
          {/* <div class="instagram-feed-container"> */}
          <div className="instagram-feed-container">
            <div className="flex-col">Account:</div>
            <div className="flex-col">Last Updated At:</div>
            <div className="flex-col">Live feed:</div>
            <div className="flex-col">Status:</div>
          </div>
            {this.props.data.instagramData.map((item, index) => {
              return ( 
                <>
                <div key={index} className="instagram-feed-container">
                  <div className="flex-col">{item.college}</div>
                  <div className="flex-col">{<Moment format="Do MMMM YYYY HH:MMa">{item.last_updated}</Moment>}</div>
                  <div className="flex-col"><a href={`/feed/${item.college}`}>JSON preview</a></div>
                  <div className="flex-col">{item.status === "ok" ? <span className="status-ok"></span> : <span className="status-error"></span>}</div>
                </div>
                <div className="instagram-feed-container">
                  {console.log('.data.data.etc ', this.props.data.instagramData[index].data)}
                  {this.props.data.instagramData[index].data !== null ? this.props.data.instagramData[index].data.map((item, index) => {
                    if ( index < 6 ) {
                      return <img src={item.media_url} className="instagram-thumbnail" />
                    }
                  }) : console.log('tis null') }
                  {/* {this.props.data.instagramData[index].data.map((item, index) => {
                    return <p>{item.media_url}</p>
                  })

                  } */}
                </div>
                </>
              )
            })}
          {/* </div> */}
        </div>
      </div>
    )
  }
}
