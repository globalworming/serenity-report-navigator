import React from 'react';
import './App.css';
import ExploreData from "./ExploreData";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Overview from "./Overview";
import {Box, CircularProgress} from "@material-ui/core";
import Controls from "./Controls";
import useGlobalState from "./state"
import InitHandleQueriesAndSyncLocalStorage from "./InitHandleQueriesAndSyncLocalStorage";
import ApplyFilter from "./ApplyFilter";

const App = () => {

    const [init] = useGlobalState('init');
    if (!init) {
      return <Router>
        <CircularProgress color={"secondary"} style={{position: "absolute", top: "3rem", left: "3rem"}}/>
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
            <ApplyFilter/>
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
