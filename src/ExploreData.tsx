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

  const [outcomes, setOutcomes] = useState<Array<TestOutcome>>(window.outcomes);

  const location = useLocation();
  const query = qs.parse(location.search)
  const [detail, setDetail] = useLocalStorage('detail', "1");


  return <>
    <Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><Button variant="contained" color="primary" disableElevation href="#anchor">test anchorlink</Button><br/>
        <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=high">test param link</Button><br/>
        <Link to="#anchor">router anchor test</Link> (does not jump to anchor)<br/>
        <Link to="?id=4&id=5&detail=high">router query test</Link> (does update location and causes rerender 👍)<br/>
      </p>
      <p>to test local storage: <Button variant="contained" color="primary" disableElevation onClick={() => setDetail((parseInt(detail) + 1).toString())}>increase detail level {detail}</Button></p>
    </Paper>

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
    <h1 id="anchor">anchor test</h1>
  </>
}

export default ExploreData
