import React from "react";
import MyPaper from "../atoms/MyPaper";
import {Box} from "@material-ui/core";
import Expandable from "../organisms/Expandable";
import StoryResultAggregate from "./StoryResultAggregate";
import UserStory from "../../model/UserStory";
import TestOutcome from "../../model/TestOutcome";
import StoryName from "./StoryName"
import Outcome from "./Outcome";

interface StoryProps {
  tell: UserStory,
  outcomes: Array<TestOutcome>,
}


const Story = ({tell, outcomes}: StoryProps) => {
  return <MyPaper><Expandable expandOnGlobalDetail={1}
                              whatsHidden={outcomes.map((it) =>
                                <Outcome key={it.name + it.startTime} tell={it} />)}>
    <Box display="flex" flex={"1 1 100%"}>
      <StoryName><span role="img" aria-label="pending">📗</span> {tell.storyName}</StoryName>
      <StoryResultAggregate outcomes={outcomes}/>
    </Box>
  </Expandable></MyPaper>;
};

export default Story