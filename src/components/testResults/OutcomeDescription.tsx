import React from "react";
import TestOutcome from "../../model/TestOutcome";
import prettyMilliseconds from "pretty-ms";
import moment from "moment";
import {Button} from "@material-ui/core";

type MyProps = {
  tell: TestOutcome
}

const OutcomeDescription = ({tell}: MyProps) => {
  tell.testSteps = [];
  return <>
    <span>tags: {tell.tags.map(({type, displayName, name}) => (<Button key={`${type}${displayName}`} variant={"outlined"}>{type}:{displayName ? displayName : name}</Button>))}</span>
    <br/><span>duration {prettyMilliseconds(tell.duration)}</span>
    <br/><span>started {moment(tell.startTime).toISOString()}</span>
    <br/><span>source {tell.testSource}</span>
  </>
};

export default OutcomeDescription