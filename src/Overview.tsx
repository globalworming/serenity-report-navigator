import React from 'react';
import './App.css';
import MyPaper from "./MyPaper";
import useGlobalState from './state';
import _ from 'lodash';
import moment from 'moment';
import ResultImage from "./ResultImage";

const Overview = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  if (outcomes.length === 0) {
    return null
  }

  const earliestDate = outcomes.map(it => moment(it.startTime).valueOf()).sort()[0];
  const latestDate = outcomes.map(it => moment(it.startTime).add(it.duration, 'milliseconds').valueOf()).sort().reverse()[0]

  const byResult = _.countBy(outcomes, it => it.result);

  return <><MyPaper>
    <strong>overview</strong>
    <ul>
      {_.toPairs(byResult).map(([result, count], i) => <React.Fragment key={i}>
        <li><ResultImage result={result}/> {result.toLowerCase()} {count}</li>
      </React.Fragment>)}
    </ul>
    <dt>duration</dt><dd>{moment(earliestDate).toISOString()} - {moment(latestDate).toISOString()}</dd>
  </MyPaper></>
  }
;

export default Overview;
