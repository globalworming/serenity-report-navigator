import React, {FunctionComponent, useEffect, useState} from "react";
import useGlobalState from "../../state";
import {Box} from "@material-ui/core";
import ExpandCollapse from "../atoms/ExpandCollapse"
import HighlightOnHover from "./HighlightOnHover";


interface ExpandableProps {
  // auto expand when <= global depths
  depths?: number,
  isExpanded?: boolean,
  whatsHidden?: any;
}

const Expandable: FunctionComponent<ExpandableProps> = ({depths, children, whatsHidden, isExpanded}) => {
  const [expandLayers] = useGlobalState('expansionDepth');
  const [expanded, setExpanded] = useState(depths ? expandLayers >= depths : isExpanded !== undefined && isExpanded);

  useEffect(() => {
    if (!depths) return;
    setExpanded(expandLayers >= depths)
  }, [depths, expandLayers]);

  const myToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);

  };

  if (!whatsHidden) {
    return <>children</>
  }

  return <>
    <Box style={{cursor: "pointer"}} display="flex" flex={"0 0 100%"} flexWrap={"wrap"} justifyContent="space-between"
         maxWidth={"100%"} onClick={myToggle} lineHeight={2}>
      <HighlightOnHover>
        <Box display="flex" flex={"1 0 80%"}>
          {children}
        </Box>
        <Box flex={"0 0 3rem"} style={{textAlign: "right"}}>
          <ExpandCollapse
            isExpanded={expanded}
          />
        </Box>
      </HighlightOnHover>
    </Box>
    {expanded && whatsHidden}
  </>
};

export default Expandable
