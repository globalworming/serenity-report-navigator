import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Overview from "./overview/Overview";
import {Box} from "@material-ui/core";
import Controls from "./controls";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import LocalStateFromQueryParameters from "./LocalStateFromQueryParameters";

const App = () => {
    const outcomes = window.outcomes;
    const [init] = useGlobalState('init');
    const [filter] = useGlobalState('filter');
    const [view] = useGlobalState('view');
    if (!init) {
      return <Router>
        <Route path="*">
          <LocalStateFromQueryParameters />
        </Route>
      </Router>
    }
  const printState = <pre style={{overflow: "auto"}}>{[{
    state: {
      filter,
      view,
      init
    }
  }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>;
  return <div className="App">
    {printState}
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

    {false && <><h2>JSON</h2>
    <pre style={{overflow: "auto"}}>
        {JSON.stringify(outcomes, null, 2)}
      </pre></> }
  </div>
  }
;


export default App;
