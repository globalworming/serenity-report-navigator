import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import Story from "./Story";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";


const ByStory = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const outcomesByStoryName = _.groupBy(outcomes, o => o.userStory.storyName);
  return <>
    <FullWidthWrappingFlexBox>
    {_.keys(outcomesByStoryName).map((storyName) => {
      return <React.Fragment key={storyName}>
          {/* TODO? always tells the first outcomes story, maybe missing other outcome.userStory.path values*/}
          <Story tell={outcomesByStoryName[storyName][0].userStory} outcomes={outcomesByStoryName[storyName]}/>
      </React.Fragment>;
    })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByStory