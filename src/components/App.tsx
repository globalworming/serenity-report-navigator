import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Controls from "./controls/Controls";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import LocalStateFromQueryParameters from "./LocalStateFromQueryParameters";
import TestOutcome from "../model/TestOutcome";
import SearchAndFilter from "./controls/SearchAndFilter"
import SwitchViewMode from "./testResults/SwitchViewMode"
import ExpandCollapseAll from "./testResults/ExpandCollapseAll"
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import Header from "./Header";
import {Box} from "@material-ui/core";


declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes: Array<TestOutcome>;
  }
}
const style = {
  background: "#111",
  padding: "0.2rem",
  borderTop: "0.2rem solid #DDDDDD",
  color: "white"
};
const App = () => {
    const [parsedQuery] = useGlobalState("hasParsedQuery");
    const [appliedFilter] = useGlobalState("hasAppliedFilter");
    const [view] = useGlobalState('view');
    const [depth] = useGlobalState('expansionDepth');
    const [filter] = useGlobalState('filter');

    const printState = <pre style={{overflow: "auto", flex: "0 0 300px"}}>{[{
      state: {
        view,
        depth,
        parsedQuery,
        appliedFilter,
        filter
      }
    }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>;

    const InitWithQueryParameters = () => <Router>
      <Route path="*">
        <LocalStateFromQueryParameters/>
      </Route>
    </Router>;

    return <FullWidthWrappingFlexBox style={style}>
      {process.env.NODE_ENV === 'development' && false && <>
        {printState}
        <Controls/>
      </>}
      {!parsedQuery && <InitWithQueryParameters/>}
      {parsedQuery && !appliedFilter && <ApplyFilter/>}


      <Header/>
      <FullWidthWrappingFlexBox>
        <Box flex={"0 0 15rem"} borderRight={"2px solid white"} padding={"1rem 0.2rem"}>
          <SearchAndFilter/>
        </Box>
        <Box flex={"1 0 40%"}>
          <SwitchViewMode/>
          {parsedQuery && appliedFilter && <>
            <ApplyFilter/>
            <ExploreData/>
          </>}

        </Box>

      </FullWidthWrappingFlexBox>
    </FullWidthWrappingFlexBox>
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

