/* eslint-disable jsx-a11y/accessible-emoji */
import {Button} from "@material-ui/core"
import React from "react";
import ExpandIcon from "./noun_Split Vertical_2439343.svg"
import CollapseIcon from "./noun_collapse vertical_2439339.svg"


interface MyProps {
  isExpanded: boolean
  onClick?: Function
}

const ExpandCollapse = ({isExpanded, onClick}: MyProps) => {
  const style = {width: "1.5rem", height: "1.5rem"};
  const buttonStyle = {background: "black", margin: "0.25em", minWidth: 0, padding: 0, paddingTop: "0.2rem", borderRadius: "100%"};


  return <Button variant={"outlined"} style={buttonStyle} color={"secondary"} onClick={(() => onClick !== undefined && onClick())}>
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