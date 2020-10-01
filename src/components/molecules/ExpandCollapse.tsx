/* eslint-disable jsx-a11y/accessible-emoji */
import {Button} from "@material-ui/core"
import React from "react";
import Emoji from "../atoms/Emoji";

interface MyProps {
  isExpanded: boolean
}

const ExpandCollapse = ({isExpanded}: MyProps) => {

  return <Button variant={"text"} style={{margin: "0 auto", display: "block", minWidth:"0"}}>
    {isExpanded && <Emoji label={"collapse"}>⤴️</Emoji>}
    {!isExpanded && <Emoji label={"expand"}>⤵️️</Emoji>}
  </Button>
};

export default ExpandCollapse