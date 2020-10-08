import useGlobalState from "../../state";
import {Button} from "@material-ui/core";
import React from "react";

const DetailLevel = () => {
  const [depth, setDepth] = useGlobalState('expansionDepth');

  return <>
    <strong>expand layers</strong> (0-4 does stuff), current {depth}
    <Button variant="contained" color="secondary" disableElevation
            onClick={() => setDepth(depth - 1)}>-detail</Button>
    <Button variant="contained" disableElevation
            onClick={() => setDepth(0)}>reset</Button>
    <Button
      variant="contained" color="primary" disableElevation
      onClick={() => setDepth(depth + 1)}>+detail</Button>
  </>
};

export default DetailLevel