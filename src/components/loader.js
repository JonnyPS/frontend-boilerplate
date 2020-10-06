import React from "react";

export function Loader(props) {
  if ( props.loadedStatus === false ) {
    return (
      <p>Please wait while we fetch the data</p>
    )
  } return null

}