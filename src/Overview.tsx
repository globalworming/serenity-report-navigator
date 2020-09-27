import React from 'react';
import './App.css';
import MyPaper from "./MyPaper";
import groupBy from "./groupBy";
import useGlobalState from './state';
import _ from 'lodash';

const Overview = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  if (outcomes.length === 0) {
    return null
  }

  const latestDate = new Date(outcomes.map(it => it.timestamp).sort().reverse()[0]);

  const byResult = groupBy(outcomes, "result");

  return <><MyPaper>
    <strong>overview</strong>
    <dl>
      {_.keys(byResult).map((it, i) => <React.Fragment key={i}>
        <dt>{it.toLowerCase()}</dt><dd>{byResult[it].length}</dd>
      </React.Fragment>)}
      <dt>most recent test</dt><dd>{latestDate.toISOString()}</dd>
    </dl>
  </MyPaper></>
  }
;

export default Overview;
