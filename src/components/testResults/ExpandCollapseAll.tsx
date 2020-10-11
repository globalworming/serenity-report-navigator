import * as React from "react";
import ExpandIcon from "../atoms/noun_Split Vertical_2439343.svg"
import CollapseIcon from "../atoms/noun_collapse vertical_2439339.svg"
import {Box, Button} from "@material-ui/core";
import useGlobalState from "../../state"

const ExpandCollapseAll = () => {
  const [depths, setDepths] = useGlobalState("expansionDepth");
  const style= {width: "1.5rem", height: "1.5rem"};

  function expandAll() {
    setDepths(Math.max(depths + 1, 1));
  }

  function collapseAll() {
    setDepths(depths - 1)
  }

  return <Box display={"flex"} paddingTop={"1rem"}>
    <Button variant={"contained"} style={{background: "#333"}} onClick={expandAll}>
      <img
        style={style}
        alt={"expand-all"} aria-label={"expand-all"} src={ExpandIcon}/>
    </Button>
    <Button variant={"contained"} style={{background: "#333"}} onClick={collapseAll}>
      <img
        style={style}
        alt={"collapse-all"} aria-label={"collapse-all"} src={CollapseIcon}/>
    </Button>
  </Box>
};

export default ExpandCollapseAll