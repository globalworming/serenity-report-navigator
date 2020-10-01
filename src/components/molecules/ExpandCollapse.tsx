import {Button} from "@material-ui/core"
import React, {useState} from "react";
import Emoji from "../atoms/Emoji";

interface MyProps {
  isExpanded: boolean
}

const ExpandCollapse = ({isExpanded}: MyProps) => {

  return <Button size={"small"} variant={"text"} style={{margin: "0.25rem"}}>
    {isExpanded && <Emoji label={"collapse"}>⤴️</Emoji>}
    {!isExpanded && <Emoji label={"expand"}>⤵️️</Emoji>}
  </Button>
}

export default ExpandCollapse