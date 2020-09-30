import Outcome from "./Outcome";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import useGlobalState from '../../state';
import Story from "./StoryHeading";
import React, {useState} from "react";


const ByStory = () => {
  const [outcomes] = useGlobalState('filteredOutcomes');
  const [view] = useGlobalState('view');
  const storiesAsPairs = _.toPairs(_.groupBy(outcomes, o => o.userStory.storyName));

  const initialState = _.fill(Array(storiesAsPairs.length), view.detail > 0);
  const [expanded, setExpanded] = useState(initialState);

  const toggle = (index: number) => {
    let newExpanded: Array<boolean> = Object.assign([], expanded);
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded)
  }

  return <>
    {storiesAsPairs.map(([storyName, outcomes], i) => <Box flex={"0 0 100%"} key={storyName}>
      <Story name={storyName} index={i} toggle={toggle} results={outcomes.map(it => it.result)}>
        {outcomes.map((it, i) => <Outcome index={i} key={it.name + it.startTime} from={it} />)}
      </Story>
    </Box>)}
  </>
}

export default ByStory