import React from 'react';
import {Paper} from "@material-ui/core";
import TestLinksAndRoutes from './TestLinksAndRoutes';
import DetailLevel from "./DetailLevel";
import FocusOnTask from "./FocusOnTask";
import FilterTags from "./FilterTags";


const Controls = () => {
    return <><Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><strong>debug</strong> controls</p>
      <p>
        <TestLinksAndRoutes/>
      </p>
      <p>
        <DetailLevel/>
      </p>
      <FilterTags/>
      <p>
        <FocusOnTask/>
      </p>

    </Paper></>
  }
;

export default Controls;
