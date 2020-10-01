import React from "react";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import useGlobalState from '../../state';
import Story from "./Story";


const ByStory = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const outcomesByStoryName = _.groupBy(outcomes, o => o.userStory.storyName);
  return <>
    <Box flex={"0 0 100%"}><h2>by user story:</h2></Box>
    {_.keys(outcomesByStoryName).map((storyName) => {
      return <Box flex={"0 0 100%"} key={storyName}>
        {/* TODO? always tells the first outcomes story, maybe missing other outcome.userStory.path values*/}
        <Story tell={outcomesByStoryName[storyName][0].userStory} outcomes={outcomesByStoryName[storyName]}/>

      </Box>;
    })}
  </>
}

export default ByStory