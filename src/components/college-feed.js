import React from "react";
import { Loader } from "./loader";
import {
  useParams
} from "react-router-dom";
export function CollegeFeed(props) {
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
    <pre>{JSON.stringify(col)}</pre>
  )
}