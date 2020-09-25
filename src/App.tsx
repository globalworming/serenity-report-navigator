import React, {useEffect, useState} from 'react';
import './App.css';
import ExploreData from "./ExploreData";
import {BrowserRouter as Router, Route, Link, useParams, useLocation} from "react-router-dom";
import Overview from "./Overview";
import {Box, CircularProgress, Paper} from "@material-ui/core";
import Controls from "./Controls";
import qs from "query-string";
import MyPaper from "./MyPaper";
import useGlobalState from "./state"
import useLocalStorage from "react-use-localstorage";

const App = () => {

  const [detail, setDetail] = useGlobalState('detail');
  if (detail < 0) {
    return <div className="App">
      <Router>
        <Route path="*">
          <ManageConfiguration/>
        </Route>
      </Router>
    </div>
  }
  return <div className="App">
      <Router>
        <Route path="*">
          <ManageConfiguration/>
          <Box display="flex" flexWrap={"wrap"}>
          <Controls/>
          <Overview />
          <ExploreData />
          </Box>
        </Route>
      </Router>
    </div>
  }
;

const ManageConfiguration = () => {

  const [detail, setDetail] = useGlobalState('detail');
  const [storedDetail, setStoredDetail] = useLocalStorage('detail', detail.toString());
  const location = useLocation();
  const query = qs.parse(location.search)
  const [init, setInit] = useState(false)

  useEffect(() => {
    // query overrides everything
    if (query.detail && query.detail[0]) {
      setDetail(parseInt(query.detail[0]))
      setStoredDetail(query.detail[0])
    }
  }, [])

  useEffect(() => {
    // not initilized? try to get from local storage
    if (detail < 0) {
      if (parseInt(storedDetail) >= 0) {
        setDetail(parseInt(storedDetail))
      } else {
        setDetail(0);
        setStoredDetail("0");
      }
    }

  }, [detail])

  useEffect(() => {
    // set init when done
    if (detail >= 0 && detail === parseInt(storedDetail)) {
      setInit(true)
    }
  })


  useEffect(() => {
    if (init && detail !== parseInt(storedDetail)) {
      setStoredDetail(detail.toString())
    }
  }, [init, detail, storedDetail])


  return <Box style={{maxWidth: "401px"}}>
    <MyPaper>
      {detail < 0 && <div><strong>loading...</strong> <CircularProgress/></div>} this component initializes global states and updates local storage with values from query parameters or changes to the global state. query parameters should take precedent
      <pre style={{overflow: "auto"}}>{[{location}, {query}, {detail}].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
    </MyPaper>

  </Box>

}

export default App;
