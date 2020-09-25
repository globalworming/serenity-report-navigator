import React, {useEffect, useState} from 'react';
import TestOutcome from "./model/TestOutcome";
import Outcome from "./Outcome";
import {Box, Button, Paper} from "@material-ui/core";
import {useLocation, useParams} from "react-router";
import qs from "query-string"
import useLocalStorage from "react-use-localstorage";
import {Link} from "react-router-dom";
//import Index from "../public/outcomes/full-json/index.json"

declare global {
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}

const ExploreData = () => {

  const outcomes = window.outcomes;

  const [detail] = useLocalStorage('detail', "1");
  const [localDetail, setLocalDetail] = useState(parseInt(detail));
  useEffect(() => setLocalDetail(parseInt(detail)), [detail, setLocalDetail])


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
}

export default ExploreData
