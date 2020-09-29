import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Overview from "./overview/Overview";
import {Box} from "@material-ui/core";
import Controls from "./controls";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import ReadQueryParameters from "./ReadQueryParameters";

const App = () => {
    const outcomes = window.outcomes;
    const [init] = useGlobalState('init');
    if (!init || init) {
      return <Router>
        <Route path="*">
          <ReadQueryParameters />
        </Route>
      </Router>
    }
    return <div className="App">
      <Router>
        <Route path="*">
          <Box display="flex" flexWrap={"wrap"}>
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
