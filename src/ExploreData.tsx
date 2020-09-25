import React, {useEffect, useState} from 'react';
import TestOutcome from "./model/TestOutcome";
import Outcome from "./Outcome";
import {Box} from "@material-ui/core";
//import Index from "../public/outcomes/full-json/index.json"

declare global {
  interface Window {
    outcomes:JSON;
  }
}


const ExploreData = () => {

  const [outcomes, setOutcomes] = useState<Array<TestOutcome>>([]);

  console.log(window.outcomes)
/*
  useEffect(() => {
    fetch('outcomes/full-json/index.json')
      .then(data => data.json())
      .then(files => {
        Promise.all(files.map((it: RequestInfo) => fetch('outcomes/full-json/' + it)))
          .then((results: Array<any>) => Promise.all(results.map((it) => it.json())))
          .then((results) => setOutcomes(results))
      })

  }, [setOutcomes]);
*/
  if (outcomes.length === 0) {
    return <></>;
  }

  return <>
    <Box display="flex" flexWrap={"wrap"}>
    {
      outcomes.map((it, i) => <Box key={i}><Outcome from={it} /></Box>)
    }
    </Box>
    <h2>JSON</h2>
    <pre>
      {JSON.stringify(outcomes, null, 2)}
    </pre>
  </>
}

export default ExploreData
