import {Redirect, useLocation} from "react-router";
import React from "react";

const RemoveQueryParams = () => {
  const location = useLocation();

  if (!location.search) {
    return null
  }

  if (window.self.origin !== "null") {
    return <Redirect to={"./"}/>
  }
  window.location.search = "";
  return null
};

export default RemoveQueryParams