import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import TestStep, {Screenshot} from "../../model/TestStep";
import {Box} from "@material-ui/core";

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
  localOutcomes.length = 1;
  const outcomesByStoryId = _.groupBy(localOutcomes, o => o.userStory.id);

  return <>
    <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
      {_.keys(outcomesByStoryId).map((storyName) => {
        return <React.Fragment key={storyName}>
          <Box color={"white"}>{outcomesByStoryId[storyName][0].userStory.storyName}</Box>
          {
            outcomesByStoryId[storyName].map((outcome, i) =>
              <React.Fragment key={i}>
                {
                  flatSteps(outcome.testSteps).map(it => <>
                      {
                        it.screenshots && it.screenshots.map(it =>
                          it.screenshot).map((it, j) =>
                          <FullWidthWrappingFlexBox>
                            <img alt={`screenshot ${outcome.id} ${j}`} style={{width: "100%", height: "100%"}}
                                 key={i + " " + j + " " + it}
                                 src={"./screenshots/" + it}/>
                          </FullWidthWrappingFlexBox>
                        )
                      }
                    </>
                  )
                }
              </React.Fragment>
            )
          }
        </React.Fragment>;
      })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByScreenshots