import React from 'react';
import TestOutcome from "./model/TestOutcome";
import Outcome from "./Outcome";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import useGlobalState from './state';
import MyPaper from "./MyPaper";

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}

const ExploreData = () => {

  const outcomes = window.outcomes;

  const [filter] = useGlobalState('filter');
  const filteredOutcomes = outcomes.filter(it => !filter.exclude.includes(it.result));

  const [detail] = useGlobalState('detail');

  const stories = _.groupBy(filteredOutcomes, function (o) {
    return o["user-story"].storyName
  });

  if (detail >= 0) {
    return <>
      {_.toPairs(stories).map(([storyName, outcomes]) => <MyPaper key={storyName}>{storyName}{outcomes.map(it => <Outcome key={it.name + it.timestamp} from={it} />)}</MyPaper>)}
    </>
  }

  return <>
    {
      outcomes.map((it, i) => <Box key={i}><Outcome from={it} /></Box>)
    }
    <h2>JSON</h2>
    <pre>
      {JSON.stringify(outcomes, null, 2)}
    </pre>
    <h1 id="anchor">anchor test</h1>
  </>
};

export default ExploreData
