import React, { Component } from "react";

export class InstaFeedSummary extends Component {
  render() {

    console.log('props', this.props.dataStream.instagramData)

    let results = this.props.dataStream.instagramData.map((item, index) => {  
      return item.college
        })

    console.log('results', results)

    return (
      <div className="grid-container-25">
        <div className="grid-col-full-inner">
          {results.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
      </div>
    )
  }
}
