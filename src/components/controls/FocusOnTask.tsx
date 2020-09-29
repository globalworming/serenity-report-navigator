import {Button} from "@material-ui/core";
import React from "react";

const FocusOnTask = () => {
  return <>
    <strong>view configurations for different use cases</strong><br/>
    <Button variant="contained" disableElevation href="?filter_testResult_include=ERROR&filter_testResult_include=FAILURE&view_detail=4&view_showScreenshots=true">debug mode</Button>
  </>
};

export default FocusOnTask