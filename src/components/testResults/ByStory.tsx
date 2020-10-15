import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import Story from "./Story";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";


const ByStory = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const outcomesByStoryId = _.groupBy(outcomes, o => o.userStory.id);
  return <>
    <FullWidthWrappingFlexBox style={{padding: "1rem"}}>
    {_.keys(outcomesByStoryId).map((storyName) => {
      return <React.Fragment key={storyName}>
          {/* TODO? always tells the first outcomes story, maybe missing other outcome.userStory.path values*/}
          <Story tell={outcomesByStoryId[storyName][0].userStory} outcomes={outcomesByStoryId[storyName]}/>
      </React.Fragment>;
    })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByStory