import * as React from "react";
import ExpandIcon from "./noun_Split Vertical_2439343.svg"
import CollapseIcon from "./noun_collapse vertical_2439339.svg"
import {Box, Button} from "@material-ui/core";
import useGlobalState from "../../state"

const ExpandCollapseAll = () => {
  const [,setDepths] = useGlobalState("expansionDepth");
  const style= {width: "1.5rem", height: "1.5rem"};

  function expandAll() {
    setDepths(4)
  }

  function collapseAll() {
    setDepths(0)
  }

  return <Box display={"flex"} paddingTop={"1rem"}>
    <Button variant={"contained"} color={"primary"} onClick={expandAll}>
      <img
        style={style}
        alt={"expand-all"} aria-label={"expand-all"} src={ExpandIcon}/>
    </Button>
    <Button variant={"contained"} color={"primary"} onClick={collapseAll}>
      <img
        style={style}
        alt={"collapse-all"} aria-label={"collapse-all"} src={CollapseIcon}/>
    </Button>
  </Box>
};

export default ExpandCollapseAll