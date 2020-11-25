import React, {useState} from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import TestStep, {Screenshot} from "../../model/TestStep";
import Emoji from "../atoms/Emoji";
import Screenshots from "./screenshots/Screenshots";
import {Button} from "@material-ui/core";

const findScreenshots = (testSteps: Array<TestStep>) => {
  let steps: Array<Screenshot> = [];
  if (!testSteps || testSteps.length === 0) return steps;
  steps = steps.concat(testSteps.filter(it => it.screenshots && it.screenshots.length > 0).map(it => it.screenshots).flat());
  testSteps.forEach(testStep => steps = steps.concat(findScreenshots(testStep.children)));
  return steps;
};


const ByScreenshots = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  let [itemsDisplayed, setItemsDisplayed] = useState(5);
  const outcomesWithScreenshots = outcomes.filter(it => findScreenshots(it.testSteps).length > 0);
  const sorted = _.sortBy(outcomesWithScreenshots, it => it.userStory.id).slice(0, itemsDisplayed);
  const outcomesByStoryId = _.groupBy(sorted, o => o.userStory.id);

  const width = 30;
  return <>
    <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
      {_.keys(outcomesByStoryId).map((storyId) => {
        return <React.Fragment key={storyId}>
          <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
            <FullWidthWrappingFlexBox style={{justifyContent: "center", fontSize: "2rem"}}><Emoji
              label={"story"}/>&nbsp;{outcomesByStoryId[storyId][0].userStory.storyName}</FullWidthWrappingFlexBox>
            {
              outcomesByStoryId[storyId].map((outcome, i) =>
                <React.Fragment key={i + storyId}>
                  <FullWidthWrappingFlexBox style={{flex: `1 1 ${width * 2}rem`}}>
                    <Screenshots tell={outcome} width={width}/>
                  </FullWidthWrappingFlexBox>
                </React.Fragment>
              )
            }
          </FullWidthWrappingFlexBox>
        </React.Fragment>;
      })}
    </FullWidthWrappingFlexBox>
    {itemsDisplayed < outcomesWithScreenshots.length && <FullWidthWrappingFlexBox>
      <Button variant={"contained"} size={"small"} color={"secondary"} fullWidth style={{margin: "1rem"}}
              onClick={() => setItemsDisplayed(itemsDisplayed + 5)}>
        show more..
      </Button>
    </FullWidthWrappingFlexBox>
    }
  </>
};

export default ByScreenshots