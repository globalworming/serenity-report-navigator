import React from "react";
import MyPaper from "../atoms/MyPaper";
import {Box} from "@material-ui/core";
import Expandable from "../organisms/Expandable";
import UserStory from "../../model/UserStory";
import TestOutcome from "../../model/TestOutcome";
import Outcome from "./Outcome";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import Emoji from "../atoms/Emoji";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {

  const storyHeading = <Box display="flex" flex={"0 0 100%"}>
    <RowWithResultAggregate tellAll={outcomes.map(it => it.result)}>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <Emoji label="story">📗</Emoji>&nbsp;{tell.storyName}
    </RowWithResultAggregate>
  </Box>;

  const storyOutComes = outcomes.map((it) => <Outcome key={it.name + it.startTime} tell={it} />);

  return <MyPaper>
    <Expandable expandOnGlobalDetail={1} whatsHidden={storyOutComes}>
      {storyHeading}
  </Expandable></MyPaper>;
};

export default Story