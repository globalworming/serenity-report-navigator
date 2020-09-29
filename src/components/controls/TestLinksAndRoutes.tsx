import {Button} from "@material-ui/core";
import React from "react";

const TestLinksAndRoutes = () => {
  return <>
    <strong>test direkt links</strong><br/>
    <Button variant="contained" color="primary" disableElevation href="?filter_testResult_exclude=SUCCESS&filter_testResult_exclude=PENDING&view_detail=1&view_showScreenshots=false">test param
      link</Button>
  </>
};

export default TestLinksAndRoutes