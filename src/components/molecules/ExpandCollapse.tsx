/* eslint-disable jsx-a11y/accessible-emoji */
import {Button} from "@material-ui/core"
import React from "react";

interface MyProps {
  isExpanded: boolean
}

const ExpandCollapse = ({isExpanded}: MyProps) => {

  return <Button variant={"text"} style={{margin: "0 auto", display: "block", minWidth:"0"}}>
    {isExpanded && <span role="img" aria-label={"collapse"}>⤴️</span>}
    {!isExpanded && <span role="img" aria-label={"expand"}>⤵️️</span>}
  </Button>
};

export default ExpandCollapse