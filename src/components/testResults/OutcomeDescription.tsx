import React from "react";
import TestOutcome from "../../model/TestOutcome";
import prettyMilliseconds from "pretty-ms";
import moment from "moment";
import {Button} from "@material-ui/core";

type MyProps = {
  tell: TestOutcome
}

const OutcomeDescription = ({tell}: MyProps) => {
  return <>
    <span>tags: {tell.tags.map(({type, displayName, name}) => (<Button key={`${type}${displayName}`} variant={"outlined"}>{type}:{displayName ? displayName : name}</Button>))}</span>
    <br/><span><strong>duration</strong> {prettyMilliseconds(tell.duration)}</span>
    <br/><span><strong>started</strong> {moment(tell.startTime).toISOString()}</span>
    <br/><span><strong>source</strong> {tell.testSource}</span>
    <br/><span><strong>outline</strong> {tell.scenarioOutline}</span>
  </>
};

export default OutcomeDescription