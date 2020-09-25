import React from 'react';
import './App.css';
import ExploreData from "./ExploreData";
import {BrowserRouter as Router, Route, Link, useParams} from "react-router-dom";

const App = () => {

  return <div className="App">
      <Router>
        <Route path="*" children={<ExploreData/>} />
      </Router>
    </div>
  }
;

export default App;
