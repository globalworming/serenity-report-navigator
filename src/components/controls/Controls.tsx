import React from 'react';
import {Paper} from "@material-ui/core";
import TestLinksAndRoutes from './TestLinksAndRoutes';
import DetailLevel from "./DetailLevel";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";
import ShowScreenshots from "./ShowScreenshots";
import FocusOnTask from "./FocusOnTask";


const Controls = () => {
    return <><Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><strong>controls</strong></p>
      <p>
        <TestLinksAndRoutes/>
      </p>
      <p>
        <DetailLevel/>
      </p>
      <p>
        <strong>filter</strong>
        <FilterResult/>
        <FilterKeywords/>
      </p>
      <p>
        <strong>config</strong>
        <ShowScreenshots/>
      </p>
      <p>
        <FocusOnTask/>
      </p>

    </Paper></>
  }
;

export default Controls;
