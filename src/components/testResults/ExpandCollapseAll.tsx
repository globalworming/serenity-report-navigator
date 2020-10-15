import * as React from "react";
import useGlobalState from "../../state"
import ExpandCollapse from "../atoms/ExpandCollapse";
import {Box} from "@material-ui/core";

const ExpandCollapseAll = () => {
  const [depths, setDepths] = useGlobalState("expansionDepth");

  function expandAll() {
    setDepths(Math.max(depths + 1, 1));
  }

  function collapseAll() {
    setDepths(depths - 1)
  }
  return <>
    <Box className={"expandCollapseAll"} style={{textAlign: "right"}}>
      <ExpandCollapse isExpanded={true} onClick={expandAll}/>
      <ExpandCollapse isExpanded={false} onClick={collapseAll}/>
    </Box>
  </>
};

export default ExpandCollapseAll