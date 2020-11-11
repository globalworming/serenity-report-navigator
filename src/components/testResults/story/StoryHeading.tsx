import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import RowWithResultAggregate from "../../molecules/RowWithResultAggregate";
import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import UserStory from "../../../model/UserStory";
import Emoji from "../../atoms/Emoji";

interface MyProps {
  outcomes: Array<TestOutcome>,
  tell: UserStory
}

const StoryHeading = ({tell, outcomes}: MyProps) => {
  return <FullWidthWrappingFlexBox className={"storyHeading"}>
    <RowWithResultAggregate tellAll={outcomes.map(it => it.result)}>
      <strong><Emoji label={"story"}/>&nbsp;{tell.storyName} ({outcomes.length})</strong>
    </RowWithResultAggregate>
  </FullWidthWrappingFlexBox>;
};

export default StoryHeading