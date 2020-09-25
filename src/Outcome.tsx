import React from 'react';
import './App.css';
import ExploreData from "./ExploreData";
import TestOutcome from "./model/TestOutcome";
import {Box, Card, CardContent} from "@material-ui/core";
import UserStory from "./model/UserStory";
import Tag from "./model/Tag";
import TestStep from "./model/TestStep";

type OutcomeProps = {
  from: TestOutcome
}

const Outcome = ({from}: OutcomeProps) => {
  let x = {
   "examples": {
      "headers": [
        "number_of_photos",
        "expected_price"
      ],
      "rows": [
        {
          "cellValues": [
            "0",
            "15.0"
          ],
          "result": "SUCCESS"
        },
        {
          "cellValues": [
            "1",
            "15.0"
          ],
          "result": "SUCCESS"
        },
        {
          "cellValues": [
            "2",
            "17.5"
          ],
          "result": "SUCCESS"
        },
        {
          "cellValues": [
            "3",
            "20.0"
          ],
          "result": "SUCCESS"
        },
        {
          "cellValues": [
            "4",
            "22.0"
          ],
          "result": "SUCCESS"
        },
        {
          "cellValues": [
            "5",
            "24.0"
          ],
          "result": "SUCCESS"
        }
      ],
      "predefinedRows": true,
      "currentRow": {
        "value": 5
      }
    }
  }
  return <Card variant="outlined" style={{margin: "0.5rem"}}>
    <CardContent>
      <strong>Outcome: {from.title} - {from.name}</strong>
      <dl>
        <dt>result</dt><dd>{from.result}</dd>
        <dt>steps</dt><dd>{from.steps}</dd>
        <dt>successful</dt><dd>{from.successful}</dd>
        <dt>failures</dt><dd>{from.failures}</dd>
        <dt>skipped</dt><dd>{from.skipped}</dd>
        <dt>ignored</dt><dd>{from.ignored}</dd>
        <dt>pending</dt><dd>{from.pending}</dd>
        <dt>duration</dt><dd>{from.duration}</dd>
        <dt>timestamp</dt><dd>{from.timestamp}</dd>
        <UserStorySection from={from["user-story"]}/>
        <IssuesSection from={from.issues}/>
        <TagsSection from={from.tags}/>
        {from["test-steps"].map((it, i) => <TestStepSection key={i} from={it} />)}
      </dl>
    </CardContent>
  </Card>
};

type UserStoryProps = {
  from: UserStory
}

const UserStorySection = ({from}: UserStoryProps) => {
  return <Box style={{padding: "0.5rem"}}>
    <strong>User Story</strong>
    <dt>qualifiedStoryClassName</dt><dd>{from.qualifiedStoryClassName}</dd>
    <dt>storyName</dt><dd>{from.storyName}</dd>
    <dt>path</dt><dd>{from.path}</dd>
  </Box>
}

type IssuesProps = {
  from: TestOutcome["issues"]
}

const IssuesSection = ({from}: IssuesProps) => {
  return <Box style={{padding: "0.5rem"}}>
    <strong>issues</strong>
    <p>{from.join(" ")}</p>
  </Box>
}

interface TagsProps {
  from: Array<Tag>
}

const TagsSection = ({from}: TagsProps) => {
  return <Box style={{padding: "0.5rem"}}>
    <strong>tags</strong>
    <p>{from.map((it) => it.type + ":" + it.name).join(", ")}</p>
  </Box>
}

interface TestStepProps {
  from: TestStep
}

const TestStepSection = ({from}: TestStepProps) => {
  return <Box style={{padding: "0.5rem"}}>
    <strong>step</strong>
    <dt>description</dt><dd>{from.description}</dd>
    <dt>duration</dt><dd>{from.duration}</dd>
    <dt>startTime</dt><dd>{from.startTime}</dd>
    <dt>screenshots</dt><dd>{from.screenshots.join(", ")}</dd>
    {from.children.map((it, i) => <TestStepSection key={i} from={it} />)}
  </Box>
}

export default Outcome;
