import React from "react";
import MyPaper from "../atoms/MyPaper";
import Expandable from "../organisms/Expandable";
import UserStory from "../../model/UserStory";
import TestOutcome from "../../model/TestOutcome";
import Outcome from "./outcome/Outcome";
import Narrative from "./Narrative";
import StoryHeading from "./StoryHeading";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {

  const storyHeading = <StoryHeading tell={tell} outcomes={outcomes}/>;

  const storyOutComes = outcomes.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>);

  return <MyPaper>
    <Expandable depths={1} whatsHidden={<>
    <Narrative tell={tell.narrative}/>
    {storyOutComes}
    </>}>
      {storyHeading}
    </Expandable></MyPaper>;
};

export default Story