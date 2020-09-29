import React from 'react';
import {Paper} from "@material-ui/core";
import TestLinksAndRoutes from './TestLinksAndRoutes';
import DetailLevel from "./DetailLevel";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";


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
        <FilterResult/>
      </p>
      <p>
        <FilterKeywords/>
      </p>
    </Paper></>
  }
;

export default Controls;
