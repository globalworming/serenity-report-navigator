import React from "react";
import Expandable from "../organisms/Expandable";
import UserStory from "../../model/UserStory";
import TestOutcome from "../../model/TestOutcome";
import Outcome from "./outcome/Outcome";
import Narrative from "./Narrative";
import StoryHeading from "./StoryHeading";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {

  const storyHeading = <StoryHeading tell={tell} outcomes={outcomes}/>;

  const storyOutComes = outcomes.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>);

  return <>
    <FullWidthWrappingFlexBox className={"story"} style={{padding: "0.1rem", background: "#464646", color: "white", borderRadius: "10px", marginBottom: "1rem"}}>
      <Expandable depths={1} whatsHidden={<>
        <Narrative tell={tell.narrative}/>
        {storyOutComes}
      </>}>
        {storyHeading}
      </Expandable>
    </FullWidthWrappingFlexBox>
  </>

};

export default Story