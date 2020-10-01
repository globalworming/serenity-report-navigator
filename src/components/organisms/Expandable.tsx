import React, {FunctionComponent, useState} from "react";
import useGlobalState from "../../state";
import {Box} from "@material-ui/core";
import ExpandCollapse from "../molecules/ExpandCollapse"


interface ExpandabledProps {
  expandOnGlobalDetail: number,
  whatsHidden?: any;
}

const Expandable: FunctionComponent<ExpandabledProps> = ({expandOnGlobalDetail, children, whatsHidden}) => {
  const [view] = useGlobalState('view');
  const [expanded, setExpanded] = useState(view.detail >= expandOnGlobalDetail);
  const myToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  if (!whatsHidden) {
    return <>children</>
  }

  return <>
    <Box display="flex" flex={"0 0 100%"} flexWrap={"wrap"} justifyContent="space-between" maxWidth={"100%"} onClick={myToggle}>
      <Box display="flex" flex={"0 0 90%"} maxWidth={"90%"}>
        {children}
      </Box>
      <Box display="flex" flex={"0 0 10%"}>
        <ExpandCollapse
          isExpanded={expanded}
        />
      </Box>
    </Box>
    {expanded && whatsHidden}
  </>
};

export default Expandable
