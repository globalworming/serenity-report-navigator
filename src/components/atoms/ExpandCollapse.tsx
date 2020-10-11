/* eslint-disable jsx-a11y/accessible-emoji */
import {Button} from "@material-ui/core"
import React from "react";
import ExpandIcon from "./noun_Split Vertical_2439343.svg"
import CollapseIcon from "./noun_collapse vertical_2439339.svg"


interface MyProps {
  isExpanded: boolean
}

const ExpandCollapse = ({isExpanded}: MyProps) => {
  const style = {width: "1.5rem", height: "1.5rem", paddingTop: "0.2rem"};

  return <Button variant={"contained"}
                 style={{background: "#333", margin: "0 auto", padding: "0", color: "#DBA", display: "block"}}>
    {!isExpanded &&
    <img
        style={style}
        alt={"expand-all"} aria-label={"expand-all"} src={ExpandIcon}/>
    }
    {isExpanded &&
    <img
        style={style}
        alt={"collapse-all"} aria-label={"collapse-all"} src={CollapseIcon}/>
    }
  </Button>
};

export default ExpandCollapse