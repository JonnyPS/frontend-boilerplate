import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { Loader } from "./loader";

export class HomepageWidgets extends Component {
	constructor(props) {
		super(props);
		this.filt = this.filt.bind(this);
	}
	filt() { 
		console.log('sdfd', this.props.data.instagramData)
		let filtered = this.props.data.instagramData.filter( (item, index) => {
			return item.status !== "ok";
		})
		return filtered;
	}
  render() {
    if ( this.props.data.dataLoaded === false ) {
      return ( <Loader /> )
    } 
    return (
      <>
        <div className="grid-container-25">
          <ul className="card-grid light grid-col-full-width">
						<li className="grid-col-md-1of2 grid-col-lg-1of3 grid-col-xl-1of4 card-article">
							<div className="content">
								<div className="card-text-container ">
									<h5 className="card-header">Instagram Feeds</h5>
										<p className="card-text">
											<span>
												{this.props.data.instagramData.length - this.filt().length }
											</span> 
											&nbsp;/&nbsp;{this.props.data.instagramData.length} feeds are currently active.
										</p>
										<button id="Button-default" className="btn tiny cta">
											<a href="/instagram" style={{color:"black"}}>Click here to view feeds
												<span class="arrow-right" aria-hidden="true">
													<svg viewBox="0 0 24 24">
														<path d="M17.6881 11.8729C17.1238 11.2118 16.5347 10.2542 15.9208 9H16.9901C18.2475 10.4583 19.5842 11.5375 21 12.2375V12.7625C19.5842 13.4625 18.2475 14.5417 16.9901 16H15.9208C16.5347 14.7458 17.1238 13.7882 17.6881 13.1271H3V11.8729H17.6881Z"></path>
													</svg>
												</span>
											</a>
										</button>
								</div>
							</div>
						</li>
          </ul>
        </div>
      </>
    )
  }
}
