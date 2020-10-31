import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import Story from "./Story";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import ExpandCollapseAll from "./ExpandCollapseAll";


const ByStory = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const outcomesByStoryId = _.groupBy(outcomes, o => o.userStory.id);
  return <>
    <ExpandCollapseAll/>
    <FullWidthWrappingFlexBox className={"stories"} style={{padding: "0.25rem"}}>
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