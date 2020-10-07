import React from "react";
import MyPaper from "../atoms/MyPaper";
import Expandable from "../organisms/Expandable";
import UserStory from "../../model/UserStory";
import TestOutcome from "../../model/TestOutcome";
import Outcome from "./Outcome";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import Emoji from "../atoms/Emoji";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Narrative from "./Narrative";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {

  const storyHeading = <FullWidthWrappingFlexBox>
    <RowWithResultAggregate tellAll={outcomes.map(it => it.result)}>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <Emoji label="story">📗</Emoji>&nbsp;{tell.storyName}
    </RowWithResultAggregate>
  </FullWidthWrappingFlexBox>;

  const storyOutComes = outcomes.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>);

  return <MyPaper>
    <Expandable expandOnGlobalDetail={1} whatsHidden={<>
    <Narrative tell={tell.narrative}/>
    {storyOutComes}
    </>}>
      {storyHeading}
    </Expandable></MyPaper>;
};

export default Story