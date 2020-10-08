import {Button} from "@material-ui/core";
import React from "react";

const FocusOnTask = () => {
  return <>
    <strong>view configurations for different use cases</strong><br/>
    <Button variant="contained" href="?filter_testResult_exclude=SUCCESS&filter_testResult_exclude=PENDING&filter_testResult_exclude=IGNORED&view_detail=3&view_showScreenshots=true">debug mode</Button>
    <Button variant="contained" href={"?outcome=com.example.testcases.jsonplaceholder.PostsIT%3Awhen%20adding%20a%20post&expand=2"}>focus single outcome</Button><Button disabled>TODO for specific issue</Button>
    <Button disabled>TODO stories</Button>
    <Button disabled>TODO tagged high prio</Button>
  </>
};

export default FocusOnTask