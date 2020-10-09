import React from "react";
import MyPaper from "../atoms/MyPaper";
import Expandable from "../organisms/Expandable";
import UserStory from "../../model/UserStory";
import TestOutcome from "../../model/TestOutcome";
import Outcome from "./outcome/Outcome";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Narrative from "./Narrative";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {

  const storyHeading = <FullWidthWrappingFlexBox>
    <RowWithResultAggregate tellAll={outcomes.map(it => it.result)}>
      <span role="img" aria-label={"story"}>📚</span>&nbsp;{tell.storyName}
    </RowWithResultAggregate>
  </FullWidthWrappingFlexBox>;

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