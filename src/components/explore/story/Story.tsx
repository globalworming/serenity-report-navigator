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
import * as _ from "lodash";
import Actors from "../../molecules/Actors";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {
  const theme = useTheme();
  const actors = _.uniqBy(outcomes.filter(it => it.actors).map(it => it.actors).flat(), (it => it.name));

  return <>
    <HorizontalResultPercentageLine tellAll={outcomes.map(it => it.result)}/>
    <FullWidthWrappingFlexBox className={"story"} style={{
      paddingLeft: "0.5rem",
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      marginBottom: "1rem"
    }}>
      <Expandable depths={1} whatsHidden={
        <>
          <Narrative tell={tell.narrative}/>
          {
            actors && actors.length > 0 && <>
              <Actors tellAll={actors}/>
            </>
          }
          {outcomes.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>)}
        </>
      }>
        <StoryHeading tell={tell} outcomes={outcomes}/>
      </Expandable>
    </FullWidthWrappingFlexBox>
  </>

};

export default Story