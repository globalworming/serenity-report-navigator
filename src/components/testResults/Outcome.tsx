import React from 'react';

import TestOutcome from "../../model/TestOutcome";
import {Box} from "@material-ui/core";
import TestStep from "../../model/TestStep";
import ResultImage from "../../ResultImage";
import Expandable from "../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import MyPaper from "../atoms/MyPaper";

type OutcomeProps = {
  tell: TestOutcome
}



const Outcome = ({tell}: OutcomeProps) => {
  let outcomeHeading = <><ResultImage result={tell.result}/> {tell.title}</>;
  return <MyPaper>
    <Expandable expandOnGlobalDetail={2} whatsHidden={<TestStepsRecursive depth={0} tellAll={tell.testSteps}/>}>
      {outcomeHeading}
    </Expandable>
  </MyPaper>
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
