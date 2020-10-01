import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Overview from "./overview/Overview";
import {Box} from "@material-ui/core";
import Controls from "./controls";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import LocalStateFromQueryParameters from "./LocalStateFromQueryParameters";
import TestOutcome from "../model/TestOutcome";

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}

const App = () => {
    const [init] = useGlobalState('init');
    const [filter] = useGlobalState('filter');
    const [view] = useGlobalState('view');

    const printState = <pre style={{overflow: "auto", flex: "0 0 30%"}}>{[{
      state: {
        filter,
        view,
        init
      }
    }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>;

    const initWithQueryParameters = <Router>
      <Route path="*">
        <LocalStateFromQueryParameters/>
      </Route>
    </Router>;

    return <Box display={"flex"} flexWrap={"wrap"} width={"100%"} className="App">
      {!init && initWithQueryParameters}
      {init && <>
        {printState}
        <ApplyFilter/>
        <Controls/>
        <Overview/>
        <ExploreData/>
        {/*<><h2>JSON</h2>
          <pre style={{overflow: "auto"}}>
        {JSON.stringify(outcomes[0], null, 2)}
      </pre>
        </>*/}
      </>}
    </Box>
  }
;


export default App;
