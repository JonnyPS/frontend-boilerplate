import React from "react";
import { Loader } from "./loader";
import { useParams } from "react-router-dom";
import JSONPretty from 'react-json-pretty';

export function CollegeFeed(props) {
  document.body.classList.remove('dark--theme');

  // use params hook to get slug param
  let params = useParams();
  // display loader until data is loaded
  if ( props.data.dataLoaded === false ) {
    return ( <Loader /> )
  }
  // get slug url param
  let slug = `${params.slug}`
  // filter through the json to get obj that matches slug param
  let col = props.data.instagramData.filter((item) => {
    return item.college === slug;
  })
  // render data json obj as string
  return (
    <>
    <div className="grid-container-25">
      <div className="grid-col-full-inner">
        <p><a href="/build/">&lt;&lt; Back to dashboard</a></p>
      </div>
    </div>
    <div className="grid-container-25">
      <div className="grid-col-full-inner">
        <JSONPretty id="json-pretty" data={col}></JSONPretty>
      </div>
    </div>
    </>
  )
}