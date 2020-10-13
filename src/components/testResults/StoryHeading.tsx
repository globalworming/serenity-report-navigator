import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import React from "react";
import TestOutcome from "../../model/TestOutcome";
import UserStory from "../../model/UserStory";

interface MyProps {
  outcomes: Array<TestOutcome>,
  tell: UserStory
}

const StoryHeading = ({tell, outcomes}: MyProps) => <FullWidthWrappingFlexBox>
  <RowWithResultAggregate tellAll={outcomes.map(it => it.result)}>
    <span role="img" aria-label={"story"}>📚</span>&nbsp;{tell.storyName}
  </RowWithResultAggregate>
</FullWidthWrappingFlexBox>;

export default StoryHeading