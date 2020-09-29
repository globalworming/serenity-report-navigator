import useGlobalState from "../../state";
import {Button} from "@material-ui/core";
import React from "react";

const DetailLevel = () => {
  const [detail, setDetail] = useGlobalState('detail');

  return <>
    <strong>amount of info</strong> (0-4 does stuff)<br/>
    <Button variant="contained" color="secondary" disableElevation
            onClick={() => setDetail((detail - 1))}>-detail</Button>
    <Button variant="contained" disableElevation
            onClick={() => setDetail(1)}>reset</Button>
    <Button
      variant="contained" color="primary" disableElevation
      onClick={() => setDetail((detail + 1))}>+detail</Button>
  </>
};

export default DetailLevel