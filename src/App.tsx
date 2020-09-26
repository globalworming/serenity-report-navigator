import React, {useEffect, useState} from 'react';
import './App.css';
import ExploreData from "./ExploreData";
import {BrowserRouter as Router, Route, Link, useParams, useLocation} from "react-router-dom";
import Overview from "./Overview";
import {Box, Button, CircularProgress, Paper} from "@material-ui/core";
import Controls from "./Controls";
import qs from "query-string";
import MyPaper from "./MyPaper";
import useGlobalState from "./state"
import useLocalStorage from "react-use-localstorage";
import {lightgray} from "color-name";
import InitHandleQueriesAndSyncLocalStorage from "./InitHandleQueriesAndSyncLocalStorage";

const App = () => {

    const [detail] = useGlobalState('detail');
    if (detail < 0) {
      return <Router>
        <Route path="*">
          <InitHandleQueriesAndSyncLocalStorage/>
        </Route>
      </Router>
    }
    return <div className="App">
      <Router>
        <Route path="*">
          <Box display="flex" flexWrap={"wrap"}>
            <InitHandleQueriesAndSyncLocalStorage/>
            <Controls/>
            <Overview/>
            <ExploreData/>
          </Box>
        </Route>
      </Router>
    </div>
  }
;


export default App;
