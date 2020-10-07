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
    const [parsedQuery] = useGlobalState("hasParsedQuery");
    const [appliedFilter] = useGlobalState("hasAppliedFilter");
    const [filter] = useGlobalState('filter');
    const [view] = useGlobalState('view');

    const printState = <pre style={{overflow: "auto", flex: "0 0 300px"}}>{[{
      state: {
        filter,
        view,
        parsedQuery,
        appliedFilter
      }
    }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>;

    const InitWithQueryParameters = () => <Router>
      <Route path="*">
        <LocalStateFromQueryParameters/>
      </Route>
    </Router>;

    return <Box display={"flex"} flexWrap={"wrap"} width={"100%"} maxWidth={"100%"} className="App">
      {printState}
      {!parsedQuery && <InitWithQueryParameters/>}
      {parsedQuery && !appliedFilter && <ApplyFilter/>}
      {parsedQuery && appliedFilter && <>
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

// todo.. put it somewhere
export const colorFor = (name: string, opacity: string = "FF") => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return "#" + ((hash & 0x00FFFFFF) + 0X0F000000).toString(16).slice(-6) + opacity
    ;
};

