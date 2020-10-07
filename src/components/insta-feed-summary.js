import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { Loader } from "./loader";

export class InstaFeedSummary extends Component {
  render() {
    if ( this.props.data.dataLoaded === false ) {
      return ( <Loader /> )
    } 
    return (
      <>
        <div className="grid-container-25 ">
          <div className="grid-col-full-inner card-grid-title">
            <h2 className="heading2">Instagram Feeds</h2>
          </div>
        </div>
        <div className="grid-container-25">
          <ul className="card-grid light grid-col-full-width">
            {this.props.data.instagramData.map((item, index) => {
              return ( 
                <li key={index} className="grid-col-md-1of2 grid-col-lg-1of3 grid-col-xl-1of4 card-article">
                  <div className="content">
                    <div className="card-text-container ">
                      <h5 className="card-header">Account Name: <br />{item.college}</h5>
                      <p className="card-text">
                        Last updated:
                        <br />
                        {<Moment format="Do MMMM YYYY HH:MMa">{item.last_updated}</Moment>}
                      </p>
                      <p>
                        <a href={`/feed/${item.college}`}>Click here for JSON preview</a>
                        
                      </p>
                      <ul className="instagram-image-thumbnail-list">
                        {this.props.data.instagramData[index].data !== null ? this.props.data.instagramData[index].data.map((item, index) => {
                          if ( index < 6 ) {
                            return <li key={index}><a href={item.media_url} target="_blank"><img src={item.media_url} className="instagram-thumbnail" /></a></li>
                          }
                        }) : <p>No images are available</p>
                        } 
                      </ul>
                      <p className="className-text">
                        <span>
                          {item.status === "ok" ? <span className="status-ok"></span> : <span className="status-error"></span>}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}
