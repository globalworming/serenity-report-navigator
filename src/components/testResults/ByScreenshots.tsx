import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import TestStep, {Screenshot} from "../../model/TestStep";
import StoryHeading from "./StoryHeading";
import MyPaper from "../atoms/MyPaper";
import OutComeHeading from "./outcome/OutcomeHeading";

const findScreenshots = (testSteps: Array<TestStep>) => {
  let steps: Array<Screenshot> = [];
  if (!testSteps || testSteps.length === 0) return steps;
  steps = steps.concat(testSteps.filter(it => it.screenshots && it.screenshots.length > 0).map(it => it.screenshots).flat());
  testSteps.forEach(testStep => steps = steps.concat(findScreenshots(testStep.children)));
  return steps;
};

const flatSteps = (testSteps: Array<TestStep>) => {
  let result: Array<TestStep> = [];
  if (!testSteps || testSteps.length === 0) return result;
  result = result.concat(testSteps);
  testSteps.forEach(testStep => result = result.concat(flatSteps(testStep.children)));
  return result;
};


const ByScreenshots = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const localOutcomes = outcomes.filter(it => findScreenshots(it.testSteps).length > 0);
  const outcomesByStoryId = _.groupBy(localOutcomes, o => o.userStory.id);

  return <>
    <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
      {_.keys(outcomesByStoryId).map((storyName) => {
        return <React.Fragment key={storyName}>
          <MyPaper>
            <StoryHeading outcomes={outcomesByStoryId[storyName]} tell={outcomesByStoryId[storyName][0].userStory}/>
            {
              outcomesByStoryId[storyName].map((outcome, i) =>
                <React.Fragment key={i + storyName}>
                  <OutComeHeading tell={outcome}/>
                  {
                    flatSteps(outcome.testSteps)
                      .filter(it => it.screenshots && it.screenshots.length > 0)
                      .slice(0, 1)
                      .map((it) => <React.Fragment key={`${i} ${it.number}`}>
                          {
                            it.screenshots && [it.screenshots[0]].map(it => it.screenshot)
                              .map((it, j) =>
                                <FullWidthWrappingFlexBox key={`${j} ${it}`}>
                                  <img alt={`screenshot ${i} ${j}`} style={{width: "100%", height: "100%"}}
                                       src={"./screenshots/" + it}/>
                                </FullWidthWrappingFlexBox>
                              )
                          }
                        </React.Fragment>
                      )
                  }
                </React.Fragment>
              )
            }
          </MyPaper>
        </React.Fragment>;
      })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByScreenshots