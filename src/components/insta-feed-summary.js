import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { Loader } from "./loader";
import { HomeBreadcrumb } from "./HomeBreadcrumb";

export class InstaFeedSummary extends Component {
  render() {
    if ( this.props.data.dataLoaded === false ) {
      return ( <Loader /> )
    } 
    return (
      <>
				<HomeBreadcrumb />
        <div className="grid-container-25 ">
          <div className="grid-col-lg-1of2 card-grid-title">
            <h2 className="heading2">Instagram Feeds</h2>
            <p style={{marginTop: 4 + "vw"}}>Here you can find a list of UAL Instagram feeds currently used on UAL's website.
              <br />
              Each list item below shows the account, a link to a JSON feed of the account, a link to the live Instagram account, the latest images from the account and a status signal displaying if everything is ok or not.
              <br />
              From here you can also reauthenticate each account if the feed appears to have gone down.
            </p>
          </div>
        </div>
        <div className="grid-container-25">
          <ul className="card-grid light grid-col-full-width">
            {this.props.data.instagramData.map((item, index) => {
              return ( 
                <li key={index} className="grid-col-md-1of2 grid-col-lg-1of3 grid-col-xl-1of4 card-article">
                  <div className="content">
                    <div className="card-text-container ">
                      <h5 className="card-header">{item.college}</h5>
                      <p className="card-text">
                        Last updated:
                        <br />
                        {<Moment format="D MMMM YYYY HH:MMa">{item.last_updated}</Moment>}
                      </p>
                      <p>
                        <a href={`/dashboard/instagram/feed/${item.college}`}>Click here for JSON preview</a>
                        <br />
                        <a href={`https://www.instagram.com/${item.college}`}>Click here live Instagram feed</a>
                      </p>
                      <p>
                        Latest Images:
                      </p>
                      <ul className="instagram-image-thumbnail-list">
                        {this.props.data.instagramData[index].data !== null ? this.props.data.instagramData[index].data.map((item, index) => {
                          if ( index < 6 ) {
                            return <li key={index}><a href={item.media_url} target="_blank"><img src={item.media_url} className="instagram-thumbnail" /></a></li>
                          }
                        }) : <p><i>No images are available</i></p>
                        } 
                      </ul>
                      <p className="className-text">
                        <span>
													{item.status === "ok" ? <span className="status-ok"></span> : <span><span className="status-error"></span><span style={{marginLeft: "16px"}}><a href={item.auth_link} className="arrow-right">Click here to reauthenticate</a></span></span>}
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
