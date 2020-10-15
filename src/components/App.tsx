import React from 'react';
import ExploreData from "./testResults/ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Controls from "./controls/Controls";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import LocalStateFromQueryParameters from "./LocalStateFromQueryParameters";
import TestOutcome from "../model/TestOutcome";
import SideMenu from "./controls/SideMenu"
import SwitchViewMode from "./testResults/SwitchViewMode"
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import Header from "./Header";
import {Box} from "@material-ui/core";
import ExpandCollapseAll from "./testResults/ExpandCollapseAll";
import {colorOf} from "../model/Result";
import * as _ from "lodash";


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
    const [outcomes] = useGlobalState("filteredOutcomes");
    const counts = appliedFilter ? _.toPairs(_.countBy(outcomes, it => it.result)) : [];


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

      <Box height={"0.5rem"} display={"flex"} overflow={"hidden"} width={"100%"}>
        {
          counts.map(([result, count]) => <React.Fragment key={result}>
              <Box style={{boxShadow: "inset black 0px 0px 3px 1px"}} height={"1rem"} width={count * 100 / outcomes.length + "%"} bgcolor={colorOf(result)}/>
            </React.Fragment>
          )
        }
      </Box>

      <FullWidthWrappingFlexBox>
        <Box flex={"0 0 15rem"} padding={"1rem 0.2rem"}>
          <SideMenu/>
        </Box>
        <Box flex={"1 0 40%"} style={{boxShadow: `inset white  3px 0px 5px -2px`, background: "black"}}>
          <Box style={{margin: "0.25rem", background: "black"}}>
            <FullWidthWrappingFlexBox>
              <Box flex={"1 0 70%"}>
                <SwitchViewMode/>
              </Box>
              <Box flex={"0 0 6rem"}>
                <ExpandCollapseAll/>
              </Box>
            </FullWidthWrappingFlexBox>
            {parsedQuery && appliedFilter && <>
              <ApplyFilter/>
              <ExploreData/>
            </>}
          </Box>
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

