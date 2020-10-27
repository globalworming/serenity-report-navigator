import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import TestStep, {Screenshot} from "../../model/TestStep";
import Emoji from "../atoms/Emoji";
import Screenshots from "./screenshots/Screenshots";

const findScreenshots = (testSteps: Array<TestStep>) => {
  let steps: Array<Screenshot> = [];
  if (!testSteps || testSteps.length === 0) return steps;
  steps = steps.concat(testSteps.filter(it => it.screenshots && it.screenshots.length > 0).map(it => it.screenshots).flat());
  testSteps.forEach(testStep => steps = steps.concat(findScreenshots(testStep.children)));
  return steps;
};


const ByScreenshots = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const localOutcomes = outcomes.filter(it => findScreenshots(it.testSteps).length > 0);
  const outcomesByStoryId = _.groupBy(localOutcomes, o => o.userStory.id);

  const width = 30;
  return <>
    <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
      {_.keys(outcomesByStoryId).map((storyId) => {
        return <React.Fragment key={storyId}>
          <FullWidthWrappingFlexBox style={{color: "#DBA", paddingTop: "1rem"}}>
            <FullWidthWrappingFlexBox style={{justifyContent: "center", fontSize: "2rem"}}><Emoji label={"story"}/>&nbsp;{outcomesByStoryId[storyId][0].userStory.storyName}</FullWidthWrappingFlexBox>
            {
              outcomesByStoryId[storyId].map((outcome, i) =>
                <React.Fragment key={i + storyId}>
                  <FullWidthWrappingFlexBox style={{flex: `1 1 ${width* 2}rem`}}>
                    <Screenshots tell={outcome} width={width} />
                  </FullWidthWrappingFlexBox>
                </React.Fragment>
              )
            }
          </FullWidthWrappingFlexBox>
        </React.Fragment>;
      })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByScreenshots