import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import prettyMilliseconds from "pretty-ms";
import moment from "moment";
import {Box, Button} from "@material-ui/core";
import {colorFor} from "../../App";

type MyProps = {
  tell: TestOutcome
}
const OutcomeDescription = ({tell}: MyProps) => {
  const startTime = typeof tell.startTime === "string" && tell.startTime.toString().includes("[") ? tell.startTime.split("[")[0] : tell.startTime;

  return <Box style={{padding: "1rem"}}>
    <span>tags: {tell.tags.map(({type, displayName, name}) => (<Button style={{color: "white", background: colorFor(type, "1F"), border: `1px solid ${colorFor(type)}`}} key={`${type}${displayName}`} variant={"outlined"}>{type}:{displayName ? displayName : name}</Button>))}</span>
    <br/><span><strong>duration</strong>: {prettyMilliseconds(tell.duration)}</span>
    <br/><span><strong>started {moment(startTime).fromNow()}</strong>: {startTime}</span>
    <br/><span><strong>source</strong>: {tell.testSource}</span>
    <br/><span><strong>outline</strong>: {tell.scenarioOutline}</span>
  </Box>
};

export default OutcomeDescription