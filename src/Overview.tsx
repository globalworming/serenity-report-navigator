import React from 'react';
import './App.css';
import MyPaper from "./MyPaper";
import groupBy from "./groupBy";
import useGlobalState from './state';
import _ from 'lodash';
import moment from 'moment';

const Overview = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  if (outcomes.length === 0) {
    return null
  }

  const earliestDate = outcomes.map(it => moment(it.startTime).valueOf()).sort()[0];
  const latestDate = outcomes.map(it => moment(it.startTime).add(it.duration, 'milliseconds').valueOf()).sort().reverse()[0]

  const byResult = groupBy(outcomes, "result");

  return <><MyPaper>
    <strong>overview</strong>
    <dl>
      {_.keys(byResult).map((it, i) => <React.Fragment key={i}>
        <dt>{it.toLowerCase()}</dt><dd>{byResult[it].length}</dd>
      </React.Fragment>)}
      <dt>duration</dt><dd>{moment(earliestDate).toISOString()} - {moment(latestDate).toISOString()}</dd>
    </dl>
  </MyPaper></>
  }
;

export default Overview;
