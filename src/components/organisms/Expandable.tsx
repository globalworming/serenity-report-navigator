import React, {FunctionComponent, useState} from "react";
import useGlobalState from "../../state";
import {Box, Switch} from "@material-ui/core";


interface ExpandabledProps {
  expandOnGlobalDetail: number,
  whatsHidden?: any;
}

const Expandable: FunctionComponent<ExpandabledProps> = ({expandOnGlobalDetail, children, whatsHidden}) => {
  const [view] = useGlobalState('view');
  const [expanded, setExpanded] = useState(view.detail >= expandOnGlobalDetail);
  const myToggle = () => {
    setExpanded(!expanded);
  };
  if (!whatsHidden) {
    return <>children</>
  }

  return <>
    <Box display="flex" justifyContent="space-between" onClick={myToggle}>
      <Box display="flex" flex={"1 1 0"}>
        {children}
      </Box>
      <Switch
        checked={expanded}
        onChange={myToggle}
        name={expanded ? "collapse" : "expand"}
        inputProps={{'aria-label': expanded ? "collapse" : "expand"}}
      />
    </Box>
    {expanded && whatsHidden}
  </>
};

export default Expandable
