import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import Story from "./story/Story";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";


const ByStory = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const outcomesByStoryId = _.groupBy(outcomes, o => o.userStory.id);
  const storyName = (it: string) => outcomesByStoryId[it][0].userStory.storyName.toLowerCase();
  return <>
    <FullWidthWrappingFlexBox className={"stories"} style={{padding: "0.25rem"}}>
    {_.sortBy(_.keys(outcomesByStoryId), storyName).map((storyId) => {
      return <React.Fragment key={storyId}>
          <Story tell={outcomesByStoryId[storyId][0].userStory} outcomes={outcomesByStoryId[storyId]}/>
      </React.Fragment>;
    })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByStory