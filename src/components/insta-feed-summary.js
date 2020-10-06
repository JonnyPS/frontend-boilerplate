import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';

export class InstaFeedSummary extends Component {
  render() {

    console.log('props', this.props.dataStream.instagramData)

    // let formatDate = ((data) => {
    //   console.log(typeof data)
    //    let day = moment(data);
    //   //  return day
    // })

    return (
      <div className="grid-container-25 instagram-feed-container">
        <div className="grid-col-full-inner">
          {this.props.dataStream.instagramData.map((item, index) => {
            return <div key={index}>
              <span>Account: {item.college}</span>
              <span>Last Updated At: {<Moment format="Do MMMM YYYY HH:MMa">{item.last_updated}</Moment>}</span>
              <span>Status: {item.status === "ok" ? <span className="status-ok"></span> : <span className="status-error"></span>}</span>
            </div>
          })}
        </div>
      </div>
    )
  }
}
