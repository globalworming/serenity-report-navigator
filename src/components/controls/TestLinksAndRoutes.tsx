import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

const TestLinksAndRoutes = () => {
  return <>
    <strong>test direkt links and routing</strong><br/>
    <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=2">test param
      link</Button><br/>
    <Link to="?id=4&id=5&detail=3">router query test</Link><br/>(does update location and causes rerender 👍)<br/>
    <Button variant="contained" disableElevation
            onClick={() => localStorage.clear()}>clear local storage</Button><br/>

  </>
};

export default TestLinksAndRoutes