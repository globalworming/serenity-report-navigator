import React from 'react';

import TestOutcome from "../../../model/TestOutcome";
import TestStepsRecursive from "./TestStepsRecursive";
import {Box, useTheme} from "@material-ui/core";
import Actors from "../../molecules/Actors";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {colorFor} from "../../App";
import ResultImage from "../../atoms/ResultImage";
import Emoji from "../../atoms/Emoji";
import * as _ from "lodash";
import {flatSteps} from "../../../model/TestStep";
import moment from "moment"
import prettyMilliseconds from "pretty-ms"
import RowWithResultAggregate from "../../molecules/RowWithResultAggregate";
import Divider from "../../atoms/Devider";

type MyProps = {
  tell: TestOutcome
}

const Outcome = ({tell}: MyProps) => {
  const theme = useTheme();
  const startTime = typeof tell.startTime === "string" && tell.startTime.toString().includes("[") ? tell.startTime.split("[")[0] : tell.startTime;
  const steps = flatSteps(tell.testSteps);
  const screenshotCount = _.sum(steps.filter(it => it.screenshots).map(it => it.screenshots.length));
  const queryCount = steps.filter(it => it.restQuery).length;


  return <>
    <FullWidthWrappingFlexBox className={"outcome"} style={{
      padding: "0.5rem",
      margin: "0.2rem",
      borderRadius: "5px",
      backgroundColor: theme.palette.background.paper,
      wordBreak: "break-word"
    }}>
      <FullWidthWrappingFlexBox>
        <span><ResultImage result={tell.result}/> {tell.title}</span>
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox>
        {tell.userStory.storyName}
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox>
        {tell.userStory.path}
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox>
        {tell.testSource}
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox>
        {tell.tags.map(({type, displayName, name}) => (
          <span style={{
            color: theme.palette.text.primary,
            background: colorFor(type, "1F"),
            border: `1px solid ${colorFor(type)}`,
            borderRadius: "5px",
            marginRight: "0.2rem",
            padding: "0.1rem"
          }} key={`${type}${displayName}`}>{type}:{displayName ? displayName : name}
        </span>))}
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox>
        {
          tell.actors && tell.actors.length > 0 && <>
            <Actors tellAll={tell.actors}/>
          </>
        }
      </FullWidthWrappingFlexBox>
      <Divider/>
      <FullWidthWrappingFlexBox>
        <Box>started {moment(startTime).fromNow()}: {moment(startTime).toISOString()}</Box>
        <Box style={{marginLeft: "0.5rem"}}>
          took: {prettyMilliseconds(tell.duration)}
        </Box>
        {screenshotCount > 0 && <Box style={{marginLeft: "0.5rem"}}>
        <Emoji label={"screenshots"}/> {screenshotCount}
        </Box>
        }
        {queryCount > 0 && <Box style={{marginLeft: "0.5rem"}}>
          <Emoji label={"http"}/> {queryCount}
        </Box>
        }

      </FullWidthWrappingFlexBox>
      <Divider/>
      <RowWithResultAggregate tellAll={flatSteps(tell.testSteps).map(it => it.result)}>
        <strong>steps</strong>
      </RowWithResultAggregate>
      <TestStepsRecursive expandOnDepths={1} depth={0} tellAll={tell.testSteps}/>
    </FullWidthWrappingFlexBox>
  </>
};


export default Outcome;