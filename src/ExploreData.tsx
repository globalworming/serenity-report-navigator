import React, {useEffect, useState} from 'react';
import TestOutcome from "./model/TestOutcome";
import Outcome from "./Outcome";
import {Box} from "@material-ui/core";
import {useLocation, useParams} from "react-router";
import qs from "query-string"
//import Index from "../public/outcomes/full-json/index.json"

declare global {
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}


const ExploreData = () => {

  const [outcomes, setOutcomes] = useState<Array<TestOutcome>>(window.outcomes);

  const location = useLocation();
  const query = qs.parse(location.search)

  return <>
    <pre>{[{location}, {query}].map(it => JSON.stringify(it)).join("\n")}</pre>
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
