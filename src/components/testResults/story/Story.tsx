import React from "react";
import Expandable from "../../organisms/Expandable";
import UserStory from "../../../model/UserStory";
import TestOutcome from "../../../model/TestOutcome";
import Outcome from "../story/Outcome";
import Narrative from "./Narrative";
import StoryHeading from "./StoryHeading";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {useTheme} from "@material-ui/core";
import HorizontalResultPercentageLine from "../../atoms/HorizontalResultPercentageLine";
import {colorFor} from "../../App";
import * as _ from "lodash";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {
  const theme = useTheme();

  const storyHeading = <StoryHeading tell={tell} outcomes={outcomes}/>;

  const storyOutComes = outcomes.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>);
  const tags = _.uniqBy(outcomes.map(it => it.tags).flat(), (it => it.type + it.name));

  return <>
    <HorizontalResultPercentageLine tellAll={outcomes.map(it => it.result)}/>
    <FullWidthWrappingFlexBox className={"story"} style={{paddingLeft: "0.5rem", backgroundColor: theme.palette.background.paper, borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", marginBottom: "1rem"}}>
      <Expandable depths={1} whatsHidden={<>
        <FullWidthWrappingFlexBox>
          {tags.map(({type, displayName, name}) => (
            <span style={{
              color: theme.palette.text.primary,
              background: colorFor(type, "1F"),
              border: `1px solid ${colorFor(type)}`,
              borderRadius: "5px",
              marginRight: "0.2rem",
              padding: "0.2rem"
            }} key={`${type}${displayName}`}>{type}:{displayName ? displayName : name}
        </span>))}
        </FullWidthWrappingFlexBox>
        <Narrative tell={tell.narrative}/>
        {storyOutComes}
      </>}>
        {storyHeading}
      </Expandable>
    </FullWidthWrappingFlexBox>
  </>

};

export default Story