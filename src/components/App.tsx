import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Overview from "./overview/Overview";
import {Box, CircularProgress} from "@material-ui/core";
import Controls from "./controls";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import InitLocalStateFromQueryParameters from "./InitLocalStateFromQueryParameters";
import RemoveQueryParams from "./RemoveQueryParams";

const App = () => {
    const outcomes = window.outcomes;
    const [init] = useGlobalState('init');
    if (!init) {
      return <Router>
        <Route path="*">
          <CircularProgress color={"secondary"} style={{position: "absolute", top: "3rem", left: "3rem"}}/>
          <InitLocalStateFromQueryParameters />
        </Route>
      </Router>
    }
    return <div className="App">
      <Router>
        <Route path="*">
          <Box display="flex" flexWrap={"wrap"}>
            <RemoveQueryParams/>
            <ApplyFilter/>
            <Controls/>
            <Overview/>
            <ExploreData/>
          </Box>
        </Route>
      </Router>
      <h2>JSON</h2>
      <pre style={{overflow: "auto"}}>
        {JSON.stringify(outcomes, null, 2)}
      </pre>
    </div>
  }
;


export default App;
