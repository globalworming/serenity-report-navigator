import React from 'react';
import TestOutcome from "./model/TestOutcome";
import Outcome from "./Outcome";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import useGlobalState from './state';
import StoryHeading from "./StoryHeading";

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}

const ExploreData = () => {

  const [outcomes] = useGlobalState('filteredOutcomes');

  const stories = _.groupBy(outcomes, o => o.userStory.storyName);

  return <>
    {_.toPairs(stories).map(([storyName, outcomes]) => <Box flex={"0 0 100%"} key={storyName}>
      <StoryHeading name={storyName} results={outcomes.map(it => it.result)}/>
      {outcomes.map(it => <Outcome key={it.name + it.startTime} from={it} />)}
      </Box>)}
  </>
};

export default ExploreData
