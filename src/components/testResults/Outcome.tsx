import React from 'react';

import TestOutcome from "../../model/TestOutcome";
import {Box} from "@material-ui/core";
import TestStep from "../../model/TestStep";
import MyPaper from "../atoms/MyPaper";
import useGlobalState from "../../state";
import ResultImage from "../../ResultImage";
import Delayed from "../organisms/Delayed";

type OutcomeProps = {
  from: TestOutcome
  index: number
}

type StepsRecursiveProps = {
  from: TestStep
}

const Outcome = ({from, index}: OutcomeProps) => {
  const [view] = useGlobalState('view');
  const {testSteps} = from;
  const {successful, ignored, failures, pending, skipped} = from;
  const {duration, startTime} = from;
  const {detail} = view;

  let outcome = <MyPaper>
    <ResultImage result={from.result}/> {from.title}
  </MyPaper>;

  if (detail === 1) {
    outcome = <MyPaper>
      {from.result} {from.title}
      {testSteps && testSteps.map((it, i) => <MyPaper key={i}>{it.description}</MyPaper>)}
    </MyPaper>
  }

  if (detail === 2) {
    outcome = <MyPaper>
      {from.result} {from.title}
      <pre>{JSON.stringify({steps: {successful, ignored, failures, pending, skipped}}, undefined, 2)}</pre>
      took {duration} seconds, {startTime}
      {testSteps && testSteps.map((it, i) => <MyPaper key={i}>{it.description}</MyPaper>)}
    </MyPaper>
  }

  if (detail === 3) {
    const StepsRecursive = ({from}: StepsRecursiveProps) => {
      return <MyPaper>
        {from.description}
        {from.children && from.children.map((it, i) => <StepsRecursive key={i} from={it}/>)}
      </MyPaper>
    };
    outcome =  <MyPaper>
      {from.result} {from.title}
      <pre>{JSON.stringify({steps: {successful, ignored, failures, pending, skipped}}, undefined, 2)}</pre>
      took {duration} seconds, {startTime}
      {testSteps && testSteps.map((it, i) => <StepsRecursive key={i} from={it}/>)}
    </MyPaper>
  }

  if (detail >= 4) {
    outcome = <MyPaper>
      <br/>
      <strong>Outcome: {from.title} - {from.name}</strong>
        {from.testSteps && from.testSteps.map((it, i) => <TestStepSection key={i} from={it}/>)}
    </MyPaper>
  }

  return <Delayed wait={index}>
    {outcome}
  </Delayed>
};

interface TestStepProps {
  from: TestStep
}

const TestStepSection = ({from}: TestStepProps) => {
  return <Box style={{padding: "0.5rem"}}>
    <strong>step</strong>
    <dt>result</dt>
    <dd>{from.result}</dd>
    <dt>description</dt>
    <dd>{from.description}</dd>
    {from.children && from.children.map((it, i) => <TestStepSection key={i} from={it}/>)}
  </Box>
};

export default Outcome;
