import React, {useEffect, useState} from 'react';
import TestOutcome from "./model/TestOutcome";
import Outcome from "./Outcome";
import {Box} from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}

const ExploreData = () => {

  const outcomes = window.outcomes;

  const [detail] = useLocalStorage('detail', "1");
  const [, setLocalDetail] = useState(parseInt(detail));
  useEffect(() => setLocalDetail(parseInt(detail)), [detail, setLocalDetail]);


  return <>
    {
      outcomes.map((it, i) => <Box key={i}><Outcome from={it} /></Box>)
    }
    <h2>JSON</h2>
    <pre>
      {JSON.stringify(outcomes, null, 2)}
    </pre>
    <h1 id="anchor">anchor test</h1>
  </>
};

export default ExploreData
