import React, {useEffect} from 'react';
import ExploreData from "./ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import useGlobalState from "../state"
import ApplyFilter from "./ApplyFilter";
import LocalStateFromQueryParameters from "./LocalStateFromQueryParameters";
import TestOutcome from "../model/TestOutcome";
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import Header from "./Header";
import {Theme, useTheme} from "@material-ui/core";
import HorizontalGlobalResultPercentageLine from "./atoms/HorizontalGlobalResultPercentageLine"


declare global {
// noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes: Array<TestOutcome>;
  }
}
const appStyle = (theme: Theme) => ({
  background: theme.palette.background.default,
  borderTop: `0.2rem solid ${theme.palette.grey}`,
  color: theme.palette.text.primary
});

const App = () => {
    const theme = useTheme();
    const [parsedQuery] = useGlobalState("hasParsedQuery");
    const [appliedFilter] = useGlobalState("hasAppliedFilter");


  const updateBackground = (color: string) => {
    document.body.style.setProperty("background-color", color);
  };

  useEffect(() => {
    return updateBackground(theme.palette.background.default);
  }, [theme.palette.background.default]);


  const fixEmptyIds = () => {
      window.outcomes.forEach(it => {
        if (!it.id || it.id.length === 0) {
          it.id = it.userStory.id + ": " + it.name
        }
      })
    };
    useEffect(fixEmptyIds);

    const InitWithQueryParameters = () => <Router>
      <Route path="*">
        <LocalStateFromQueryParameters/>
      </Route>
    </Router>;

    return <FullWidthWrappingFlexBox className={"app"} style={appStyle(theme)}>
      {!parsedQuery && <InitWithQueryParameters/>}
      {parsedQuery && !appliedFilter && <ApplyFilter/>}

      <Header/>
      <HorizontalGlobalResultPercentageLine/>

      <FullWidthWrappingFlexBox>
         {parsedQuery && appliedFilter && <>
              <ApplyFilter/>
              <ExploreData/>
            </>}
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

