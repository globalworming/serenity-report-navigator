import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Overview from "./overview/Overview";
import {Box} from "@material-ui/core";
import Controls from "./controls";
import useGlobalState from "../state"
import InitHandleQueriesAndSyncLocalStorage from "./InitHandleQueriesAndSyncLocalStorage";
import ApplyFilter from "./ApplyFilter";

const App = () => {
    const outcomes = window.outcomes;
    const [init] = useGlobalState('init');
    if (!init) {
      return <Router>
        <Route path="*">
          <InitHandleQueriesAndSyncLocalStorage/>
        </Route>
      </Router>
    }
    return <div className="App">
      <Router>
        <Route path="*">
          <Box display="flex" flexWrap={"wrap"}>
            <InitHandleQueriesAndSyncLocalStorage/>
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
